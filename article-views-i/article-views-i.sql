# Write your MySQL query statement below
SELECT distinct`viewer_id` as `id` FROM `views` WHERE `author_id` = `viewer_id` ORDER BY `id`;