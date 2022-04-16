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
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch('example'));
  // watch input value by passing the name of it

  return (
    <ContactFormSection>
      <Curve />
      <h5>have any projects in mind?</h5>
      <span className='span-write'>write to us</span>
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <ContactForm onSubmit={handleSubmit(onSubmit)}>
        <input name='name' {...register('name')} />
        <input type='email' name='email' {...register('email')} />
        <textarea type='text' name='message' {...register('message')} />
        {/* register your input into the hook by invoking the "register" function */}
        {/* <input defaultValue='test' {...register('example')} /> */}

        {/* include validation with required or other standard HTML validation rules */}
        {/* <input {...register('exampleRequired', { required: true })} /> */}
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input type='submit' />
      </ContactForm>

      <SocialContainer>
        <SocialBlock>
          <TwitterIcon />
        </SocialBlock>
        <SocialBlock>
          <SendIcon />
        </SocialBlock>
        <SocialBlock>
          <LinkedinIcon />
        </SocialBlock>
        <SocialBlock>
          <EmailIcon />
        </SocialBlock>
      </SocialContainer>
    </ContactFormSection>
  );
}
