// data/cars.js

export const cars = [
  {
    id: 1,
    name: "Rolls Royce",
    type: "Sedan",
    price: 96,
    image: "/car1.png",
    fuel: "70L",
    transmission: "Manual",
    capacity: "4 People",
    gallery: ["/car1.png", "/car11.png", "/car22.png"],
    reviews: [
      { user: "Alex Stanton", date: "31 July 2022", rating: 5, comment: "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.", avatar: "/avatars/alex.jpg", subtitle: "CEO at Bukalapak" },
      { user: "Skylar Dias", date: "20 July 2022", rating: 4, comment: "We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.", avatar: "/avatars/skylar.jpg", subtitle: "CEO at Amazon" }
    ]
  },
  {
    id: 2,
    name: "Mercedes-Benz",
    type: "SUV",
    price: 10,
    image: "/car2.png",
    fuel: "80L",
    transmission: "Automatic",
    capacity: "6 People",
    gallery: ["/car2.png", "/car11.png", "/car22.png"],
    reviews: [
      { user: "Sarah Johnson", date: "15 August 2022", rating: 5, comment: "Excellent service and a wide variety of cars. The booking process was smooth and the delivery was on time. Highly recommend!", avatar: "/avatars/sarah.jpg", subtitle: "Marketing Manager" },
      { user: "Michael Chen", date: "10 August 2022", rating: 4, comment: "Good experience overall. The car was clean and well-maintained. The staff was friendly and helpful.", avatar: "/avatars/michael.jpg", subtitle: "Software Engineer" }
    ]
  },
  {
    id: 3,
    name: "Toyota Camry",
    type: "Sedan",
    price: 60,
    image: "/car1.png",
    fuel: "60L",
    transmission: "Manual",
    capacity: "4 People",
    gallery: ["/car1.png", "/car11.png", "/car22.png"],
    reviews: [
      { user: "Emily Davis", date: "25 July 2022", rating: 5, comment: "Perfect car for a family trip. Comfortable seats and spacious interior. The booking process was quick and easy.", avatar: "/avatars/emily.jpg", subtitle: "Teacher" },
      { user: "David Rodriguez", date: "20 July 2022", rating: 4, comment: "Good value for money. The car was reliable and easy to drive. The staff was helpful.", avatar: "/avatars/david.jpg", subtitle: "Business Owner" }
    ]
  },
  {
    id: 4,
    name: "Honda Accord",
    type: "Sedan",
    price: 50,
    image: "/car2.png",
    fuel: "50L",
    transmission: "Automatic",
    capacity: "4 People",
    gallery: ["/car2.png", "/car11.png", "/car22.png"],
    reviews: [
      { user: "Sophia Lee", date: "18 August 2022", rating: 5, comment: "Excellent car and excellent service. The booking process was fast and the delivery was on time. Highly recommend!", avatar: "/avatars/sophia.jpg", subtitle: "Student" },
      { user: "James Wilson", date: "12 August 2022", rating: 4, comment: "Good experience. The car was clean and comfortable. The staff was friendly and helpful.", avatar: "/avatars/james.jpg", subtitle: "Freelancer" }
    ]
  },
  {
    id: 5,
    name: "BMW X5",
    type: "SUV",
    price: 20,
    image: "/car1.png",
    fuel: "100L",
    transmission: "Automatic",
    capacity: "6 People",
    gallery: ["/car1.png", "/car11.png", "/car22.png"],
    reviews: [
      { user: "Olivia Brown", date: "29 July 2022", rating: 5, comment: "Outstanding service and a wide variety of cars. The booking process was smooth and the delivery was on time. Highly recommend!", avatar: "/avatars/olivia.jpg", subtitle: "Designer" },
      { user: "Ethan Taylor", date: "25 July 2022", rating: 4, comment: "Good experience overall. The car was clean and well-maintained. The staff was friendly and helpful.", avatar: "/avatars/ethan.jpg", subtitle: "Doctor" }
    ]
  },
  {
    id: 6,
    name: "Audi A4",
    type: "Sedan",
    price: 70,
    image: "/car2.png",
    fuel: "60L",
    transmission: "Manual",
    capacity: "4 People",
    gallery: ["/car2.png", "/car11.png", "/car22.png"],
    reviews: [
      { user: "Ava Martinez", date: "10 August 2022", rating: 5, comment: "Excellent car and excellent service. The booking process was fast and the delivery was on time. Highly recommend!", avatar: "/avatars/ava.jpg", subtitle: "Accountant" },
      { user: "Noah Anderson", date: "05 August 2022", rating: 4, comment: "Good experience. The car was clean and comfortable. The staff was friendly and helpful.", avatar: "/avatars/noah.jpg", subtitle: "Engineer" }
    ]
  },
  {
    id: 7,
    name: "Lexus ES",
    type: "Sedan",
    price: 80,
    image: "/car1.png",
    fuel: "70L",
    transmission: "Automatic",
    capacity: "4 People",
    gallery: ["/car1.png", "/car11.png", "/car22.png"],
    reviews: [
      { user: "Isabella Garcia", date: "22 July 2022", rating: 5, comment: "Perfect car for a family trip. Comfortable seats and spacious interior. The booking process was quick and easy.", avatar: "/avatars/isabella.jpg", subtitle: "Lawyer" },
      { user: "Mason Rodriguez", date: "18 July 2022", rating: 4, comment: "Good value for money. The car was reliable and easy to drive. The staff was helpful.", avatar: "/avatars/mason.jpg", subtitle: "Teacher" }
    ]
  },
  {
    id: 8,
    name: "Porsche 911",
    type: "Coupe",
    price: 60,
    image: "/car2.png",
    fuel: "120L",
    transmission: "Manual",
    capacity: "2 People",
    gallery: ["/car2.png", "/car11.png", "/car22.png"],
    reviews: [
      { user: "Liam Martinez", date: "15 August 2022", rating: 5, comment: "Outstanding service and a wide variety of cars. The booking process was smooth and the delivery was on time. Highly recommend!", avatar: "/avatars/liam.jpg", subtitle: "Entrepreneur" },
      { user: "Emma Wilson", date: "10 August 2022", rating: 4, comment: "Good experience overall. The car was clean and well-maintained. The staff was friendly and helpful.", avatar: "/avatars/emma.jpg", subtitle: "Designer" }
    ]
  },
  {
    id: 9,
    name: "Tesla Model S",
    type: "Sedan",
    price: 30,
    image: "/car1.png",
    fuel: "100L",
    transmission: "Automatic",
    capacity: "4 People",
    gallery: ["/car1.png", "/car11.png", "/car22.png"],
    reviews: [
      { user: "Sophia Lee", date: "29 July 2022", rating: 5, comment: "Excellent car and excellent service. The booking process was fast and the delivery was on time. Highly recommend!", avatar: "/avatars/sophia.jpg", subtitle: "Student" },
      { user: "James Wilson", date: "25 July 2022", rating: 4, comment: "Good experience. The car was clean and comfortable. The staff was friendly and helpful.", avatar: "/avatars/james.jpg", subtitle: "Freelancer" }
    ]
  },
  {
    id: 10,
    name: "Jaguar F-Type",
    type: "Coupe",
    price: 90,
    image: "/car2.png",
    fuel: "110L",
    transmission: "Manual",
    capacity: "2 People",
    gallery: ["/car2.png", "/car11.png", "/car22.png"],
    reviews: [
      { user: "Liam Martinez", date: "18 August 2022", rating: 5, comment: "Outstanding service and a wide variety of cars. The booking process was smooth and the delivery was on time. Highly recommend!", avatar: "/avatars/liam.jpg", subtitle: "Entrepreneur" },
      { user: "Emma Wilson", date: "15 August 2022", rating: 4, comment: "Good experience overall. The car was clean and well-maintained. The staff was friendly and helpful.", avatar: "/avatars/emma.jpg", subtitle: "Designer" }
    ]
  }
]; 

export const popularCars = [
    {
      id: 1,
      name: "Koenigsegg",
      type: "Sport",
      price: 99,
      image: "/car1.png",
      fuel: "90L",
      transmission: "Manual",
      capacity: "2 People",
    },
    {
      id: 2,
      name: "Nissan GT-R",
      type: "Sport",
      price: 80,
      image: "/car2.png",
      fuel: "80L",
      transmission: "Manual",
      capacity: "2 People",
    },
    {
      id: 3,
      name: "Rolls Royce",
      type: "Sedan",
      price: 96,
      image: "/car1.png",
      fuel: "70L",
      transmission: "Manual",
      capacity: "4 People",
    },
    {
      id: 4,
        name: "Honda Civic",
        image: "/car2.png",
        year: 2022,
        seats: 4,
        fuel: "Diesel",
        mileage: 20,
        price: 42,
        discountPrice: 32,
    },
  ];
  
  export const recommendedCars = [
    {
      id: 4,
      name: "All New Rush",
      type: "SUV",
      price: 72,
      image: "/car2.png",
      fuel: "70L",
      transmission: "Manual",
      capacity: "6 People",
    },
    {
      id: 5,
      name: "CR-V",
      type: "SUV",
      price: 80,
      image: "/car1.png",
      fuel: "80L",
      transmission: "Manual",
      capacity: "6 People",
    },
    {
      id: 6,
      name: "MG ZX Excite",
      type: "Hatchback",
      price: 74,
      image: "/car2.png",
      fuel: "70L",
      transmission: "Manual",
      capacity: "4 People",
    },
    {
      id: 7,
      name: "MG ZX Excite",
      type: "Hatchback",
      price: 74,
      image: "/car2.png",
      fuel: "70L",
      transmission: "Manual",
      capacity: "4 People",
    },
  ];
  