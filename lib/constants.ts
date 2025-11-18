export type EventItem = {
    image: string;
    title: string;
    slug: string;
    location: string;
    date: string;
    time: string;
}

export const events: EventItem[] = [
  {
    image: '/images/event1.png',
    title: 'React Summit 2026',
    slug: 'react-summit-2026',
    location: 'Amsterdam, Netherlands',
    date: '2026-04-14',
    time: '09:00 AM - 05:30 PM'
  },
  {
    image: '/images/event2.png',
    title: 'JSConf EU 2026',
    slug: 'jsconf-eu-2026',
    location: 'Lisbon, Portugal',
    date: '2026-05-21',
    time: '10:00 AM - 06:00 PM'
  },
  {
    image: '/images/event3.png',
    title: 'Google I/O 2026',
    slug: 'google-io-2026',
    location: 'Mountain View, CA, USA',
    date: '2026-06-02',
    time: '09:30 AM - 04:30 PM'
  },
  {
    image: '/images/event4.png',
    title: 'Microsoft Build 2026',
    slug: 'microsoft-build-2026',
    location: 'Seattle, WA, USA',
    date: '2026-05-12',
    time: '10:00 AM - 05:00 PM'
  },
  {
    image: '/images/event5.png',
    title: 'Node Summit 2026',
    slug: 'node-summit-2026',
    location: 'Berlin, Germany',
    date: '2026-07-09',
    time: '09:00 AM - 05:00 PM'
  },
  {
    image: '/images/event6.png',
    title: 'HackMIT 2026',
    slug: 'hackmit-2026',
    location: 'Cambridge, MA, USA',
    date: '2026-09-19',
    time: '06:00 PM (24-hr hackathon start)'
  },
//   {
//     image: '/images/ethglobal-tokyo-2026.png',
//     title: 'ETHGlobal Tokyo 2026',
//     slug: 'ethglobal-tokyo-2026',
//     location: 'Tokyo, Japan',
//     date: '2026-10-03',
//     time: '11:00 AM - 07:00 PM'
//   },
//   {
//     image: '/images/devopsdays-nyc-2026.png',
//     title: 'DevOpsDays NYC 2026',
//     slug: 'devopsdays-nyc-2026',
//     location: 'New York, NY, USA',
//     date: '2026-11-11',
//     time: '09:00 AM - 04:00 PM'
//   }
];