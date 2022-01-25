import React, { useState } from 'react';

const Cards = ({users}) => {
  const [follow, setFollow] = useState(false)
  const handleFollowButton = () => setFollow(!follow)

  const list_socialmedia = [
    {
      url: 'facebook.com',
      icon: '/assets/icons/facebook.svg'
    },
    {
      url: 'twitter.com',
      icon: '/assets/icons/twitter.svg'
    },
    {
      url: 'instagram.com',
      icon: '/assets/icons/instagram.svg'
    },
    {
      url: 'youtube.com',
      icon: '/assets/icons/youtube.svg'
    },
    {
      url: 'trakteer.id',
      icon: '/assets/icons/insert_link.svg'
    },
  ]

  return (
    <div className='cards'>
      <div className='cards-row'>

        <div className='cards-col-1'>
          <div className='cards-cover__wrapper'>
            <img 
              src={users.cover}
              alt="cover image"
              className='cards-cover'
            />
          </div>
          <img 
            onClick={() => alert('telah di klik')}
            src={'/assets/icons/mdi_more_horiz.svg'}
            alt="icon"
            className='cards-cover__icon'
          />
        </div>

        <div className='cards-col-2'>
          <div className='cards-content__wrapper'>
            <div className='cards-avatar'>
              <img
                src={users.avatar}
                alt='avatar'
              />
            </div>

            <button className={follow ? 'cards-follow--btn active' : 'cards-follow--btn'} onClick={handleFollowButton}>
              <img 
                src={follow ? '/assets/icons/check.svg' : '/assets/icons/person_add.svg'}
                alt='icon follow'
              />
              {follow ? 'Following' : 'Follow'}
            </button>
          </div>

          <div className='cards-content__profile'>
            <div className='cards-content__profile--username'>
              <p className='cards-content__fullname'>{users.name}</p>
              <p className='cards-content__username'>{users.username}</p>
            </div>

           
              <p className='cards-content__bio'>{users.descriptions}</p>
           
          </div>

          <div className='cards-content__info'>
            <p className='cards-content__followers'><span className='cards-content__value'>{users.followers}</span> Followers</p>
            <div className='cards-content__jobs'>
              <span></span>
              <p>{users.job}</p>
            </div>
          </div>

          <div className='cards-content__socialmedia'>
            
              {
                list_socialmedia.map((socialmedia, idx) => (
                  <div className='cards-content__socialmedia--fb' key={idx}>
                    <a href={socialmedia.url} target={'_blank'} >
                      <img 
                        src={socialmedia.icon}
                        alt='icon social media'
                      />
                    </a>
                </div>
                ))
              }
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Cards;
