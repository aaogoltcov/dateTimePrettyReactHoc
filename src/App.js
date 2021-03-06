import './App.css';
import React, {useState} from 'react';
import shortid from 'shortid';
import DateTimePretty from "./components/DateTimePretty";

function DateTime(props) {
  return (
      <p className="date">{props.date}</p>
  )
}

function Video(props) {
  const DateTimePrettyComp = DateTimePretty(DateTime);
  return (
      <div className="video">
        <iframe
            title="Video"
            src={props.url}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
        />
        <DateTimePrettyComp date={props.date} />
      </div>
  )
}

function VideoList(props) {
  return props.list.map(item => <Video key={shortid.generate()} url={item.url} date={item.date} />);
}

export default function App() {
  const [list] = useState([
    {
      url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2017-07-31 13:24:00'
    },
    {
      url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2022-03-03 12:10:00'
    },
    {
      url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2021-02-03 23:16:00'
    },
    {
      url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2018-01-03 12:10:00'
    },
    {
      url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2022-01-01 16:17:00'
    },
    {
      url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2021-12-02 05:24:00'
    },
  ]);

  return (
      <>
        <link rel="shortcut icon" href="../public/favicon.ico" />
        <VideoList list={list} />
      </>
  );
}