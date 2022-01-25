import React from 'react';
import { Cards } from '../global'

const HomeComponent = () => {
  const list_users = [
    {
      name: 'Wandi',
      username: '@idnaw',
      descriptions: 'halo aku wandi, adiknya ipin! aku adalah seorang penulis. jangan lupa trakteer aku mpek-mpek yah!!',
      job: 'Penulis',
      followers: '15k',
      avatar: '/assets/images/ava2.jpeg',
      cover: '/assets/images/cover2.jpeg',
    },
    {
      name: 'Riwandi',
      username: '@iniusername',
      descriptions: 'Halo semua! perkenalkan aku riwandi. aku adalah seorang illustrator. ayo trakteer aku gorengan yah!! gomawoo',
      job: 'Illustrator',
      followers: '5k',
      avatar: '/assets/images/IMG_4681.jpg',
      cover: '/assets/images/mick-50XwniKxiXI-unsplash.jpg',
    },
    {
      name: 'Rusman',
      username: '@rusmanggo',
      descriptions: 'Halo semua! perkenalkan aku rusman. aku adalah seorang streamer. ayo trakteer aku teh pucuk yah!!',
      job: 'Streamer',
      followers: '335k',
      avatar: '/assets/images/ava3.jpg',
      cover: '/assets/images/cover3.jpeg',
    },
  ]

  return (
    <main className='main-home'>
      <section className='container'>
        <div className='row'>
          {
            list_users.map((user, idx) => (
              <Cards key={idx} users={user} />
            ))
          }

        </div>
      </section>
    </main>
  );
};

export default HomeComponent;
