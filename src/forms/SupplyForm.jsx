// Supply Entry Form

// supply_id (Auto Number, Primary Key)
// item_name (Text)
// category (Choice: food, clothing, medical, hygiene, shelter, other)
// quantity (Number)
// unit (Text)
// bol_number (Number) - Bill of Landing
// pro_number (Number) - Progressive rotating number[progressive number 7 - 10 digits]
//    National Motor Freight Classification (NMFC)
// scac_number (Number) - BOL number and PRO number, containing 7 to 10 digits
// expiry_date (Date)
// location_type (Choice: shipment, truck)
// location_id (Number, Links to truck)
// status ([Temporary] Choice: available, reserved, expired, distributed)
// created_at (Date/Time)
// updated_at (Date/Time)