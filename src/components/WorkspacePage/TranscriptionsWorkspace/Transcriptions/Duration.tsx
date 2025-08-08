
interface DurationProps {
    className?: string,
    seconds: number,
}


export default function Duration({className, seconds}: DurationProps) {
  return (
    <time dateTime={`${Math.round(seconds)}`}>
      {format(seconds)}
    </time>
  )
}

function format (seconds: number) {
    const date = new Date(seconds * 1000);
    const hh = date.getUTCHours();
    const mm = date.getUTCMinutes();
    const ss = pad(date.getUTCSeconds().toString());

    if(hh){
        return `${hh}:${pad(mm.toString())}:${ss}`
    }
    return `${mm}:${ss}`
}

function pad (string: string) {
    return ('0' + string).slice(-2)
  }
