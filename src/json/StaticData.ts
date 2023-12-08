//// ==========================
/// ======= SideBar Data ======
/// ===========================
const links = [
  {
    id: 0,
    title: "Home",
    url: "/", /////////////////////////              //////////////////////
  }, /////////////// Here I added all the Dummy Data //////////////
  {
    id: 1,
    title: "About",
    url: "/about",
  },
  {
    id: 2,
    title: "Contact",
    url: "/contact",
  },

  {
    id: 3,
    title: "Privacy Policy",
    url: "/privacy",
  },
];
//// ==========================
/// ======= Contact Data ======
/// ===========================
const formFields = [
  {
    name: "firstname",
    placeholder: "Robert Lee",
    label: "First Name",
    type: "text",
    required: "true",
  },
  {
    name: "lastname",
    placeholder: "Anderson",
    label: "Last Name",
    type: "text",
    required: "true",
  },
  {
    name: "email",
    placeholder: "Keving.jones@gmail.com",
    label: "E-mail Address",
    type: "email",
    required: "true",
  },
];

//// ==========================
/// ======= Footer Data =======
/// ===========================
const linkPages = [
  {
    id: 1,
    heading: "Inspirations",
  },
  {
    id: 2,
    heading: "Templates",
  },
  {
    id: 3,
    heading: "Resource",
  },
  {
    id: 4,
    heading: "Company",
  },
];
//// ==========================
/// ======= Privacy Data =======
/// ===========================
const privacyData = [
  {
    id: 1,
    heading: "Building software shouldn't be so hard",
    desc1:
      "Navigating the intricacies of software development often poses formidable challenges, but it is our belief that building software shouldn't be an unnecessarily arduous endeavor. With a commitment to simplicity and efficiency, we strive to redefine the development experience. Our approach seeks to streamline processes, empower developers, and foster innovation, ensuring that the journey of creating exceptional software is not only rewarding but also accessible to all.",
    desc2:
      "At the heart of our philosophy is the conviction that software development should inspire creativity and problem-solving rather than being a labyrinth of complexities. By providing intuitive tools, comprehensive resources, and a supportive ecosystem, we endeavor to transform the perception that building software is an insurmountable task.",
  },
  {
    id: 2,
    heading: "You should get something working on day one",
    desc1:
      "At the core of our development ethos is the principle that you should see tangible results on day one. We understand the urgency and importance of swift progress. Our approach prioritizes efficiency, enabling you to get a functional foundation up and running from the onset. By providing tools, frameworks, and resources that facilitate rapid development,",
  },
  {
    id: 3,
    heading: "Don't reimplement the wheel",
    desc1:
      "In line with our commitment to efficiency and mindful development, we advocate against reinventing the wheel. Recognizing the wealth of existing solutions and best practices, our approach encourages leveraging proven technologies and frameworks. By embracing the principle of 'Don't reinvent the wheel,' we streamline the development process, saving time and resources.",
    desc2:
      "This philosophy enables us to focus on innovation and building upon existing foundations, ensuring that our solutions are not only effective but also mindful of industry standards. Together",
  },
  {
    id: 4,
    heading: "You should get working on day one",
    desc1: "1. On day one, we prioritize getting things done",
    desc2: "2. e empower you to see results from the start. ",
    desc3: "3. Our approach is geared towards swift, tangible progress.",
    desc4:
      "4.  Your journey with us begins with immediate and impactful strides forward.",
  },
];
type blogPostes = {
  Response: string;
  image: string;
  title: string;
  date: string;
  category: string;
  paragraph: string;
  quotes: string;
  likes: string;
};

const BlogPost = [
  {
    id: 1,
    image: "https://unsplash.com",
    title:
      "Id reprehrenderit mollit in tempor naid incididunt cupidatat consectetura",
    date: "24 April, 2023",
    category: "Photography",

    mainDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt leo mi, viverra urna. Arcu velit risus, condimentum ut vulputate cursus porttitor turpis in. Diam egestas nec massa, habitasse. Tincidt dui.",
  },
  {
    id: 2,
    image: "https://unsplash.com",
    title:
      "Id reprehrenderit mollit in tempor naid incididunt cupidatat consectetura",
    date: "22 April, 2023",
    category: "Photography",

    mainDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt leo mi, viverra urna. Arcu velit risus, condimentum ut vulputate cursus porttitor turpis in. Diam egestas nec massa, habitasse. Tincidt dui.",
  },
  {
    id: 3,
    image: "https://unsplash.com",
    title:
      "Id reprehrenderit mollit in tempor naid incididunt cupidatat consectetura",
    date: "18 April, 2023",
    category: "Photography",
    mainDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt leo mi, viverra urna. Arcu velit risus, condimentum ut vulputate cursus porttitor turpis in. Diam egestas nec massa, habitasse. Tincidt dui.",
  },
];
export { links, formFields, linkPages, privacyData, BlogPost };
