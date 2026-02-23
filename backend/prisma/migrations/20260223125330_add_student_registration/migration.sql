-- CreateTable
CREATE TABLE "uam"."student_registration" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "program" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "background" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "student_registration_pkey" PRIMARY KEY ("id")
);
