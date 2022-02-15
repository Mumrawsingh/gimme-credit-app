# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
User.destroy_all
Prompt.destroy_all
puts "Seeding commenced"

# User seeds

user1 = User.create(username: 'mattu', password: "abzyJ+23", score: 680)
user2 = User.create(username: 'lilshiloh', password: "iLovemydad!", score: 680)
user3 = User.create(username: 'jordan23', password: "fkThemkids", score: 680)
user4 = User.create(username: 'mheritage', password: "!dreadRasta", score:680)

# prompt seeds

credit_age_prompt = Prompt.create(description: "of the two scenarios. what would you do?", img_url: "")
credit_inquiries_prompt = Prompt.create(description: "of the two scenarios. what would you do?", img_url: "")
credit_mix_prompt = Prompt.create(description: "of the two scenarios. what would you do?", img_url: "")
credit_usage_prompt = Prompt.create(description: "of the two scenarios. what would you do?", img_url: "")
payment_history_prompt = Prompt.create(description: "of the two scenarios. what would you do?", img_url: "")

# choice seeds

credit_age_choice_bad_one = Choice.create(
    description: "I have one credit card account. It's kind of new but, hey it's a start right? 
                  My cousin and I haven't spoke in a while, but I'm sure she'd be okay with authorizing me as a user on her card
                  Although She misses payments sometimes, that shouldn't affect me cause it's not my card. I'll then use her card 
                  account for the the bigger purchases that I don't feel like using my card for. Let's do this!", 
    img_url: ""
)
credit_age_choice = Choice.create(
    description: "I have one credit card account. It's kind of new but, hey it's a start right? Moving forward, 
                  I'll apply for a few new accounts over the span of a few months. My sister has had this account 
                  for a long time and I'd like to ask her to be an authorized user on that account. We trust each other, plus 
                  I don't actually have to use it, but I just need my name on it. I'm not planning on using it, but 
                  if I do, I'll pay that balance I created or pay her back on time.", 

    img_url: ""
)

credit_inquiries_choice = Choice.create(
    description: "I already have three credit cards, but I don't spend much. The balances are low and I'm comfortable 
                  making payments. The thing is, is that I wan't more things in my life. I wan't a car! Yeah alright 
                  let me do some research and make sure who I want to apply with, then I'll apply for that auto loan and buy 
                  my next ride!", 
    img_url: ""
)
credit_inquiries_choice = Choice.create(
    description: "Nice! I've been getting a lot of new offers in the mail to open credit cards. There are a few that have
                  great terms like 0% APR for the whole year and more. I don't need all these accounts, but I can't go wrong with at least
                  six of these. All right then, Time to fill out some applications. I'll have all six by next week and start building 
                  my credit.", 
    img_url: ""
)

credit_mix_choice = Choice.create(description: "red pill", img_url: "")
credit_mix_choice = Choice.create(description: "blue pill", img_url: "")
 
credit_usage_choice = Choice.create(description: "red pill", img_url: "")
credit_usage_choice = Choice.create(description: "blue pill", img_url: "")
 
payment_history_choice = Choice.create(
    description: "Ok I've got three credit cards and only two of them have larger balances. No problem. I pay those large 
                  balances every month and my credit report has to gimme credit for that. The third card has a $40 balance on 
                  it. That's chump change and I need not be concerned with that until the other two cards are low. Awesome! I'm
                  doing great!", 
    img_url: ""
)
payment_history_choice = Choice.create(
    description: "Yeah, I have a few cards, about 6 total. I'm not sure if I need them all, but they definitely help me out. 
                  The balances are small and I make sure to pay them on time. I don't mind taking out a loan for this new car 
                  I wan't as long as it doesn't affect my ability to pay down my current obligations.", 
    img_url: "")

#prompt_choice seeds
promptchoice = PromptChoice.create(user_id: user1.id, prompt_id: credit_age_prompt.id, choice_id: credit_age_choice_bad_one.id, name: "")
                    byebug

puts "Seeding complete"




















