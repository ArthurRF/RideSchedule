-- CreateTable
CREATE TABLE "RideUser" (
    "ride_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "subscription_date" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("ride_id","user_id")
);

-- AddForeignKey
ALTER TABLE "RideUser" ADD FOREIGN KEY ("ride_id") REFERENCES "Ride"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RideUser" ADD FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
