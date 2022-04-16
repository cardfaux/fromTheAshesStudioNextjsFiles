import Link from 'next/link';
import moment from 'moment';
import { urlFor } from 'lib/api';

const NewCardItem = ({ slug, image, title, subTitle, date, link }) => {
  return (
    <>
      {link ? (
        <Link {...link}>
          <a>
            <article className='works--item'>
              <div className='works--text'>
                {date && <p>{moment(date).format('LL')}</p>}
                <img
                  src={urlFor(image)
                    // .height(250)
                    .width(400)
                    .crop('center')
                    .fit('clip')
                    .url()}
                  alt='Card image cap'
                />
                <h3>{title}</h3>
                <p>{subTitle}</p>
              </div>
            </article>
          </a>
        </Link>
      ) : (
        <article key={slug} className='works--item'>
          <div className='works--text'>
            {date && <p>{moment(date).format('LL')}</p>}
            <img
              src={urlFor(image)
                // .height(250)
                .width(400)
                .crop('center')
                .fit('clip')
                .url()}
              alt='Card image cap'
            />
            <h3>{title}</h3>
            <p>{subTitle}</p>
          </div>
        </article>
      )}
    </>
  );
};

export default NewCardItem;
