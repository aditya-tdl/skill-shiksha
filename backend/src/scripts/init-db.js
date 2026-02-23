import pg from "pg";

/**
 * This script checks if the target database exists on the PostgreSQL server.
 * If it doesn't exist, it creates it automatically.
 * It also creates the required schemas (public, uam) if they don't exist.
 * 
 * Usage: node src/scripts/init-db.js
 */

async function initDatabase() {
    const databaseUrl = process.env.DATABASE_URL;

    if (!databaseUrl) {
        console.error("❌ DATABASE_URL is not set. Please set it in your environment.");
        process.exit(1);
    }

    // Parse the DATABASE_URL to extract components
    const url = new URL(databaseUrl);
    const targetDbName = url.pathname.replace("/", ""); // e.g., "appointment_app"
    const host = url.hostname;
    const port = url.port || 5432;
    const user = url.username;
    const password = decodeURIComponent(url.password);
    const sslMode = url.searchParams.get("sslmode");

    console.log(`🔍 Checking if database "${targetDbName}" exists on ${host}...`);

    // Connect to the default "postgres" database first
    const adminPool = new pg.Pool({
        host,
        port: parseInt(port),
        user,
        password,
        database: "postgres",
        ssl: { rejectUnauthorized: false },
    });

    try {
        const client = await adminPool.connect();

        // Check if the target database exists
        const result = await client.query(
            "SELECT 1 FROM pg_database WHERE datname = $1",
            [targetDbName]
        );

        if (result.rows.length === 0) {
            console.log(`📦 Database "${targetDbName}" does not exist. Creating...`);
            // Cannot use parameterized query for CREATE DATABASE
            await client.query(`CREATE DATABASE "${targetDbName}"`);
            console.log(`✅ Database "${targetDbName}" created successfully!`);
        } else {
            console.log(`✅ Database "${targetDbName}" already exists.`);
        }

        client.release();
    } catch (error) {
        console.error("❌ Error checking/creating database:", error.message);
        process.exit(1);
    } finally {
        await adminPool.end();
    }

    // Now connect to the target database and create schemas
    const targetPool = new pg.Pool({
        host,
        port: parseInt(port),
        user,
        password,
        database: targetDbName,
        ssl: { rejectUnauthorized: false },
    });

    try {
        const client = await targetPool.connect();

        // Create the "uam" schema if it doesn't exist (public is always there)
        console.log(`🔍 Checking schemas...`);
        await client.query('CREATE SCHEMA IF NOT EXISTS "uam"');
        console.log(`✅ Schema "uam" is ready.`);

        client.release();
    } catch (error) {
        console.error("❌ Error creating schemas:", error.message);
        process.exit(1);
    } finally {
        await targetPool.end();
    }

    console.log("🎉 Database initialization complete!");
}

initDatabase();
