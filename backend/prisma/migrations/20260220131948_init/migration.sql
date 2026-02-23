-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "uam";

-- CreateEnum
CREATE TYPE "role" AS ENUM ('STUDENT', 'ADMIN', 'MENTOR');

-- CreateEnum
CREATE TYPE "BookingStatus" AS ENUM ('PENDING', 'CONFIRMED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "PaymentMode" AS ENUM ('ONLINE', 'OFFLINE', 'EMI');

-- CreateTable
CREATE TABLE "uam"."user" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "mobile" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "role" NOT NULL DEFAULT 'STUDENT',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "uam"."course" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "duration" TEXT NOT NULL,
    "isPopular" BOOLEAN NOT NULL DEFAULT false,
    "emiAvailable" BOOLEAN NOT NULL DEFAULT false,
    "image" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "uam"."course_booking" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "courseId" INTEGER NOT NULL,
    "status" "BookingStatus" NOT NULL DEFAULT 'PENDING',
    "paymentMode" "PaymentMode" NOT NULL,
    "paymentId" TEXT,
    "amountPaid" INTEGER NOT NULL DEFAULT 0,
    "bookedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "course_booking_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "uam"."user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_mobile_key" ON "uam"."user"("mobile");

-- CreateIndex
CREATE INDEX "user_email_idx" ON "uam"."user"("email");

-- CreateIndex
CREATE INDEX "user_mobile_idx" ON "uam"."user"("mobile");

-- CreateIndex
CREATE UNIQUE INDEX "course_title_key" ON "uam"."course"("title");

-- CreateIndex
CREATE INDEX "course_title_idx" ON "uam"."course"("title");

-- CreateIndex
CREATE INDEX "course_slug_idx" ON "uam"."course"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "course_booking_userId_courseId_key" ON "uam"."course_booking"("userId", "courseId");

-- AddForeignKey
ALTER TABLE "uam"."course_booking" ADD CONSTRAINT "course_booking_userId_fkey" FOREIGN KEY ("userId") REFERENCES "uam"."user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "uam"."course_booking" ADD CONSTRAINT "course_booking_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "uam"."course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
