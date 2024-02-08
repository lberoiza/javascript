import 'dayjs/locale/de';
import 'dayjs/locale/en';
import 'dayjs/locale/es';
import * as dayjs from 'dayjs';
import Config from '@/config/Config';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);


interface TimeProps extends React.HTMLAttributes<HTMLTimeElement> {
  locale?: string;
  format?: string;
}

const Dayjs: React.FC<TimeProps> = ({ locale = `${Config.DEFAULT_LANGUAGE}`, ...props }) => {
  const datetime = new Date(props.children!.toString());
  const dayJsDate = dayjs(datetime).locale(locale);
  
  const formatedDate = props.format? dayJsDate.format(props.format) : dayJsDate.fromNow();
  
  return <time dateTime={datetime.getTime().toString()} {...props}>{formatedDate}</time>;
};

export default Dayjs;


