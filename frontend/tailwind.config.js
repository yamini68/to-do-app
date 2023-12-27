/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 0px 8px 0px rgba(54, 89, 226, 0.16)",
      },
      backgroundColor: {
        "custom-hover": "#EBEEFC",
        "custom-light-blue-hover":"#D1E9FF",
        "custom-green-hover":"#B6EABB",
        "custom-pink-hover":"#FCE7F6",
        "custom-blue-hover":"#D8E0FD",
      },
      colors: {
        "custom-blue": "#3659E2",
        'custom-red': '#E92B2B',
        "custom-pink": "#FDF2FA",
        "custom-green": "#E7F8E9",
        "custom-light-blue": "#ECF6FC",
        "custom-blue-1": "#EBEEFC",
        "secondary-pink": "#EE46BC",
        "secondary-blue": "#3659E2",
        "secondary-green": "#12BB23",
        "secondary-light-blue": "#3FA1E3",
        "custom-gray": "#777",
        'add-task-color': '#263FA0',
        'add-task-name': '#232323',
        'cancle':'#1B72C2',
        'placeholder':"#AFAFAF"
      },
      spacing: {
        8: "32px",
      },
      borderColor:{
        'custom-color': '#B9C0CB',
      },
      borderRadius: {
        20: "20px",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["hover"],
    },
  },
  plugins: [],
};
