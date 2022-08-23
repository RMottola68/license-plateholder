puts "SEEDING SEEDS..."

u1 = User.create!( plate: "SPD RACR", state: "California", image: "https://www.superherohype.com/assets/uploads/2022/05/Speed-Racer-featured-1280x720.jpg")
u2 = User.create!( plate: "KNIGHT", state: "California", image: "https://i.guim.co.uk/img/media/0ab49b6e04b10d043968961894e859c43242876b/21_212_2957_1774/master/2957.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=44a3b3afcb4aab27132aea345fa9af46")
u3 = User.create!( plate: "OFP 857", state: "Indiana", image: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7590E549D0794B60B45B87FD5881A0165B9F49C2BA0DCF46E8C9219300B680D9/scale?width=1920&aspectRatio=1.78&format=jpeg" )
u4 = User.create!( plate: "SHIBBY", state: "New Jersey", image: "https://media1.popsugar-assets.com/files/thumbor/Iq0Les9n4NgwFsKZw1-spncRxM8/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/11/19/022/n/44498184/303399cae00254b0_MCDDUWH_FE007/i/Dude-Where-My-Car.jpg")

r1 = Review.create!(title: "Fast and Furious", content: "As quick as they come.", rating: "5")
r2 = Review.create!(title: "Knight in Shining Charmer/Bae Watch". content: "Me: Standing on the corner of 8th and Evergreen. You: David freaking Hasselhoff", rating: "10")
r3 = Review.create!(title: "The Limit DOES Exist", content: "You may need a parent trap to catch this mean girl. Met her on a freaky friday while I was herbie fully loaded. Just my luck." rating: "9")
r4 = Review.create!(title: "...And Then?", content: "You: dude. Your friend: sweet", rating: "420")

ur1 = UserReview.create!(user: u1, review: r1)
ur2 = UserReview.create!(user: u2, review: r2)
ur3 = UserReview.create!(user: u3, review: r3)
ur4 = UserReview.create!(user: u4, review: r4)

puts "...SEEDS SEEDED "