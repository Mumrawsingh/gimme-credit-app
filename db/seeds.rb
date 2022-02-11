# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Seeding commenced"

# User seeds

user1 = User.create(username: 'mattu', password: "abzyJ+23")
user2 = User.create(username: 'sirshiloh', password: "iLovemydad!")
user3 = User.create(username: 'jordan23', password: "fkThemkids")

# prompt seeds

credit_age_prompt = Prompt.create(description: "Time to make a choice", img_url: "")
credit_inquiries_prompt = Prompt.create(description: "Time to make a choice", img_url: "")
credit_mix_prompt = Prompt.create(description: "Time to make a choice", img_url: "")
credit_usage_prompt = Prompt.create(description: "Time to make a choice", img_url: "")
payment_history_prompt = Prompt.create(description: "Time to make a choice", img_url: "")

# choice seeds

credit_age_choice = Choice.create(description: "red pill", img_url: "")
credit_age_choice = Choice.create(description: "blue pill", img_url: "")

credit_inquiries_choice = Choice.create(description: "red pill", img_url: "")
credit_inquiries_choice = Choice.create(description: "blue pill", img_url: "")

credit_mix_choice = Choice.create(description: "red pill", img_url: "")
credit_mix_choice = Choice.create(description: "blue pill", img_url: "")
 
credit_usage_choice = Choice.create(description: "red pill", img_url: "")
credit_usage_choice = Choice.create(description: "blue pill", img_url: "")
 
payment_history_choice = Choice.create(description: "red pill", img_url: "")
payment_history_choice = Choice.create(description: "blue pill", img_url: "")

#prompt_choice seeds
# PromptChoice.create(user_id: user.id, prompt_id: prompt.id, choice_id: choice.id, name: "")
 

puts "Seeding complete"




















