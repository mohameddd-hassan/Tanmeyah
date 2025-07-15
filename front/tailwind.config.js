const { channel } = require('diagnostics_channel');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
     colors: {
      head: '#ec2227',
      txt: 'white',
      slide:'rgba(255, 255, 255, 1)',
     bckg:'rgba(221, 221, 221, 1)',
      bw: 'rgba(221, 221, 221, 1)' ,
      slide2: 'rgba(235, 188, 36, 1)' ,
      hov:'rgba(0,0,0,1)',
      ourproduct: '#F6F6F6',
      adv:' #666666',
      channel:' rgba(0, 0, 0, 0.15);'



    },
    
    extend: {
     backgroundImage: {
        'hero-pattern': "url('assets/images/whoweare/Vector.svg')",
        
      },
       fontFamily: {
        hm: ['hm'],
      },
    },
  },
  plugins: [],
}