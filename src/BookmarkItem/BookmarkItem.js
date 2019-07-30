import React from 'react';
import Rating from '../Rating/Rating';
import './BookmarkItem.css';

export default function BookmarkItem(props) {
  return (
    <li className='BookmarkItem'>
      <div className='BookmarkItem__row'>
        <h3 className='BookmarkItem__title'>
          <a
            href={props.bookmark_link}
            target='_blank'
            rel='noopener noreferrer'>
            {props.bookmark_site}
          </a>
        </h3>
        <Rating value={props.bookmark_rating} />
      </div>
      <p className='BookmarkItem__description'>
        {props.bookmark_desc}
      </p>
      <div className='BookmarkItem__buttons'>
        <button
          className='BookmarkItem__description'
          onClick={() => props.onClickDelete(props.bookmark_id)}
        >
          Delete
        </button>
      </div>
    </li>
  )
}

BookmarkItem.defaultProps = {
  onClickDelete: () => {
    console.log(`delete`)
  },
}
