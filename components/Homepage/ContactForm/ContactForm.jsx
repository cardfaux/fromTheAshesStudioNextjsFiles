import { useForm } from 'react-hook-form';

import Curve from '../../SVGs/Curve';
import TwitterIcon from '../../SVGs/Twitter';
import SendIcon from '../../SVGs/Send';
import LinkedinIcon from '../../SVGs/Linkedin';
import EmailIcon from '../../SVGs/Email';

import {
  ContactFormSection,
  ContactForm,
  SocialContainer,
  SocialBlock,
} from './ContactFormStyles';

export default function App() {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  // const onSubmit = (data) => console.log(data);

  const onSubmit = async (data, e) => {
    await fetch('/api/mail', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    // console.log(data);
    e.target.reset();
  };

  // console.log(watch('name'));
  // watch input value by passing the name of it

  return (
    <ContactFormSection>
      <Curve />
      <h5>have any projects in mind?</h5>
      <span className='span-write'>write to us</span>
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <ContactForm onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder='full name'
          name='name'
          {...register('name', {
            required: 'This is required.',
            maxLength: {
              value: 200,
              message: 'Max Length is 200 Characters.',
            },
          })}
        />
        {errors.name && <p>{errors.name?.message}</p>}
        <input
          placeholder='email'
          type='email'
          name='email'
          {...register('email', {
            required: 'This is required.',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Must be an e-mail address',
            },
          })}
        />
        {errors.email && <p>{errors.email?.message}</p>}
        <textarea
          placeholder='type message here'
          type='text'
          rows='6'
          name='message'
          {...register('message', { required: 'This is required.' })}
        />
        {errors.message && <p>{errors.message?.message}</p>}
        <input type='submit' />
      </ContactForm>

      <SocialContainer>
        <a
          href='https://twitter.com/FromTheAshes205'
          target='_blank'
          rel='noopener noreferrer'
        >
          <SocialBlock>
            <TwitterIcon />
          </SocialBlock>
        </a>
        <a
          href='https://telegram.me/fromtheashesstudio'
          target='_blank'
          rel='noopener noreferrer'
        >
          <SocialBlock>
            <SendIcon />
          </SocialBlock>
        </a>
        <a
          href='https://www.linkedin.com/in/james-hagood/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <SocialBlock>
            <LinkedinIcon />
          </SocialBlock>
        </a>
        <a href='mailto:studiofromtheashes.studio@gmail.com'>
          <SocialBlock>
            <EmailIcon />
          </SocialBlock>
        </a>
      </SocialContainer>
    </ContactFormSection>
  );
}
