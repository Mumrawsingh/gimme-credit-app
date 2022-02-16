# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
User.destroy_all
Prompt.destroy_all
Choice.destroy_all

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
    img_url: "",
    choice_type: false,
    prompt_id: credit_age_prompt.id
)
credit_age_choice_good_one = Choice.create(
    description: "I have one credit card account. It's kind of new but, hey it's a start right? Moving forward, 
                  I'll apply for a few new accounts over the span of a few months. My sister has had this account 
                  for a long time and I'd like to ask her to be an authorized user on that account. We trust each other, plus 
                  I don't actually have to use it, but I just need my name on it. I'm not planning on using it, but 
                  if I do, I'll pay that balance I created or pay her back on time.", 

    img_url: "",
    choice_type: true,
    prompt_id: credit_age_prompt.id
)

credit_inquiries_choice_good_one = Choice.create(
    description: "I already have three credit cards, but I don't spend much. The balances are low and I'm comfortable 
                  making payments. The thing is, is that I wan't more things in my life. I wan't a car! Yeah alright 
                  let me do some research and make sure who I want to apply with, then I'll apply for that auto loan and buy 
                  my next ride!", 
    img_url: "",
    choice_type: true,
    prompt_id: credit_inquiries_prompt.id
)
credit_inquiries_choice_bad_one = Choice.create(
    description: "Nice! I've been getting a lot of new offers in the mail to open credit cards. There are a few that have
                  great terms like 0% APR for the whole year and more. I don't need all these accounts, but I can't go wrong with at least
                  six of these. All right then, Time to fill out some applications. I'll have all six by next week and start building 
                  my credit.", 
    img_url: "",
    choice_type: false,
    prompt_id: credit_inquiries_prompt.id
)

credit_mix_choice_bad_one = Choice.create(description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu cursus euismod quis viverra nibh cras. Semper risus in hendrerit gravida rutrum.", img_url: "", choice_type: false, prompt_id: credit_mix_prompt.id)
credit_mix_choice_good_one = Choice.create(description: "Integer feugiat scelerisque varius morbi enim nunc. Turpis tincidunt id aliquet risus feugiat in ante metus. Mi eget mauris pharetra et ultrices neque ornare aenean. Turpis nunc eget lorem dolor sed.", img_url: "", choice_type: true, prompt_id: credit_mix_prompt.id)
 
credit_usage_choice_good_one = Choice.create(description: "Things could be worse. I have a credit card with a credit limit that is as high as $5000. there's a minimum payment, but I'd prefer to pay extra to get the balance down to $1000. This will be the best move in my opinion", img_url: "", choice_type:true, prompt_id: credit_usage_prompt.id)
credit_usage_choice_bad_one = Choice.create(description: "There's about eigt credit cards in my wallet right now. It feels good knowing that I have a backup card, then another backup card for that backup card. When one card maxes out, I'll just use the next until I can't anymore. This finance thing is EASY.", img_url: "", choice_type:false, prompt_id: credit_usage_prompt.id)
 
payment_history_choice_bad_one = Choice.create(
    description: "Ok I've got three credit cards and only two of them have larger balances. No problem. I pay those large 
                  balances every month and my credit report has to gimme credit for that. The third card has a $40 balance on 
                  it. That's chump change and I need not be concerned with that until the other two cards are low. Awesome! I'm
                  doing great!", 
    img_url: "",
    choice_type: false,
    prompt_id: payment_history_prompt.id
)
payment_history_choice_good_one = Choice.create(
    description: "Yeah, I have a few cards, about 6 total. I'm not sure if I need them all, but they definitely help me out. 
                  The balances are small and I make sure to pay them on time. I don't mind taking out a loan for this new car 
                  I wan't as long as it doesn't affect my ability to pay down my current obligations.", 
    img_url: "",
    choice_type: true,
    prompt_id: payment_history_prompt.id
    )

#prompt_choice seeds
promptchoice = PromptChoice.create(user_id: user1.id, prompt_id: credit_age_prompt.id, choice_id: credit_age_choice_bad_one.id, name: "")
                

puts "Seeding complete"




















