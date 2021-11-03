# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Product.destroy_all

User.create(name: "Kolt", username: "kolja", email: "test@email.com", password: "password", password_confirmation: "password")

Product.create(name: "Spicy Salsa", image: "https://peppercreekfarms.com/wp-content/uploads/2017/08/Holy-Hot-Spicy-Salsa.jpg", description: "this is my description", price: 12)