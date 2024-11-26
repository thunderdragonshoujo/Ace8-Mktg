/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'hero-background-mobile': "url('/bg_mobile.png')",
        'hero-background-desktop': "url('/hero_bg.png')",
        'conner-gradient': 'linear-gradient(180deg, #FF88C3 0%, #9B86FE 100%)',
        'management-bg': "url('/management_bg.png')",
        'service-card-gradient': 'linear-gradient(180deg, rgba(255, 136, 195, 0.1) 0%, rgba(155, 134, 254, 0.1) 100%)',
        'purple_gradient': ' linear-gradient(180deg, #FF88C3 0%, #9B86FE 100%)',
        'gradient_ii': 'linear-gradient(180deg, rgba(255, 136, 195, 0.37) 0%, rgba(155, 134, 254, 0.37) 100%)',
        'patterns': "url('/_message_broker_bg_sm.png')",
        'patterns_mobile': "url('/_message_broker_bg.png')",
        'diamond-gradient': 'radial-gradient(261.46% 261.46% at 50% 50%, #0B0E21 7.89%, rgba(11, 14, 33, 0) 100%)',
        'conner-gradient-ii': "linear-gradient(180deg, #FF88C3 0%, #9B86FE 100%)",
        'conner-gradient-iii': "linear-gradient(180deg, #FF88C3 0%, #9B86FE 100%)",
        'purple_border': "url('/microservice_border_dashed.png')",
        'banner_hand': "url('/_banner_flare.png'), url('/_hand.png'), url('/_border.png')",
        'semi_circle': "url('/semi_circle.png')",
        'secure_banner': "url('/_banner_flare.png'), url('/_secure.png')",
        'banner-flare': "url('/_banner_flare.png')",
        'blue_border': "url('/_green_border.png')",
        'integration_bg': "url('/_integration_service.png')",
        'banner-key': "url('/banner_key.png')",
        'multi-color': "url('/multi_color.png')"
      },
      colors: {
        'bg-100': '#0D1117',
        'text-100': '#000000',
        'accent-100': '#8167FF',
        'accent-200': '#EA9EFF',
        'accent-300': '#33B3AE'
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite'
      },
      backdropBlur:  {
        '200':  '200px'
      }
    },
  },
  plugins: [],
};
