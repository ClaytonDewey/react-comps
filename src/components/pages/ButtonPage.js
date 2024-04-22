import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
import Button from '../Button';

const ButtonPage = () => {
  return (
    <div>
      <div className='mb-5'>
        <Button success rounded outline>
          <GoBell />
          Click me!!
        </Button>
      </div>
      <div className='mb-5'>
        <Button danger outline>
          <GoCloudDownload />
          Buy Now!
        </Button>
      </div>
      <div className='mb-5'>
        <Button warning>
          <GoDatabase />
          See Deal!
        </Button>
      </div>
      <div className='mb-5'>
        <Button secondary outline>
          Hide Ads!
        </Button>
      </div>
      <div className='mb-5'>
        <Button primary rounded>
          Something!
        </Button>
      </div>
    </div>
  );
};
export default ButtonPage;
