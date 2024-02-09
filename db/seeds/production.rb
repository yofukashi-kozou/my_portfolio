# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
User.create!(
            name:  "Test User",
             email: "testtest@yahoo.co.jp",
             password:              "password",
             password_confirmation: "password",
             img_path: "default.img" ,
             introduction: "testtesttesttesttesttesttesttesttesttesttest")

 Category.create!(categories_id:1,name:'バックエンド')   
Category.create!(categories_id:2,name:'フロントエンド')  
Category.create!(categories_id:3,name:'インフラ')   
