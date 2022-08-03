USE rugby_api;

create table plaquage_ok (
    Id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    sum_plaquage_ok int
);
create table plaquage_ko (
    Id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    sum_plaquage_ko int
);

USE rugby_api;
INSERT INTO plaquage_ok(Id,sum_plaquage_ok)
VALUES (1,0);

USE rugby_api;
INSERT INTO plaquage_ko(Id,sum_plaquage_ko)
VALUES (1,0)