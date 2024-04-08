# Write your MySQL query statement below
UPDATE `salary` SET `sex` = 
    CASE sex
        WHEN 'f' then 'm'
        WHEN 'm' then 'f'
        else `sex`
    END;
