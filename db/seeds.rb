puts "SEEDING SEEDS..."

u1 = User.create!( plate: "SPD RACR", state: "California")
u2 = User.create!( plate: "KNIGHT", state: "California")
u3 = User.create!( plate: "OFP 857", state: "Indiana" )
u4 = User.create!( plate: "SHIBBY", state: "New Jersey")

r1 = Review.create!(title: "Fast and Furious", content: "As quick as they come.", rating: "5")
r2 = Review.create!(title: "Knight in Shining Charmer/Bae Watch". content: "Me: Standing on the corner of 8th and Evergreen. You: David freaking Hasselhoff", rating: "10")
r3 = Review.create!(title: "The Limit DOES Exist", content: "You may need a parent trap to catch this mean girl. Met her on a freaky friday while I was herbie fully loaded. Just my luck." rating: "9")
r4 = Review.create!(title: "...And Then?", content: "You: dude. Your friend: sweet", rating: "420")

ur1 = UserReview.create!(user: u1, review: r1)
ur2 = UserReview.create!(user: u2, review: r2)
ur3 = UserReview.create!(user: u3, review: r3)
ur4 = UserReview.create!(user: u4, review: r4)

puts "...SEEDS SEEDED "