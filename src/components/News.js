// 56f164ae46b74c39914c176a020f49fb
// https://newsapi.org/v2/top-headlines?q=tech&from=2023-05-05&to=2023-05-05&sortBy=popularity&apiKey=56f164ae46b74c39914c176a020f49fb
// https://newsapi.org/v2/top-headlines?q=covid&from=2023-05-02&to=2023-05-02&sortBy=popularity&apiKey=56f164ae46b74c39914c176a020f49fb
// https://newsapi.org/v2/top-headlines?q=ipl&from=2023-05-02&to=2023-05-02&sortBy=popularity&apiKey=56f164ae46b74c39914c176a020f49fb
// https://newsapi.org/v2/top-headlines?q=stock&from=2023-05-02&to=2023-05-02&sortBy=popularity&apiKey=56f164ae46b74c39914c176a020f49fb
// &page=2
import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
//   articles = [{
//     "source": {
//         "id": "news24",
//         "name": "News24"
//     },
//     "author": "sport",
//     "title": "WATCH | Faf intervenes as fiery Kohli loses cool in IPL post-match row",
//     "description": "Indian cricket star Virat Kohli was fined on Tuesday for the second time in this IPL after a post-match altercation with former national team-mate Gautam Gambhir.",
//     "url": "https://www.news24.com/sport/cricket/ipl/watch-faf-intervenes-as-fiery-kohli-loses-cool-in-ipl-post-match-row-20230502",
//     "urlToImage": "https://cdn.24.co.za/files/Cms/General/d/825/ce547ea212ec4859a929a090fdb6f9d9.jpg",
//     "publishedAt": "2023-05-02T09:35:15+00:00",
//     "content": "<ul><li>Virat Kohli has copped another fine after a post-match altercation in the Indian Premier League.</li><li>Matters got so heated that Kohli's Royal Challengers Bangalore skipper, Faf du Plessis… [+2668 chars]"
// }, {
//     "source": {
//         "id": "handelsblatt",
//         "name": "Handelsblatt"
//     },
//     "author": "Kurt Sagatz",
//     "title": "ChatGPT-Interview im „heute-journal“ – „Die Welt zu einem besseren Ort machen“",
//     "description": "Im Gespräch mit Christian Sievers gibt sich ChatGPT-Avatar Jenny diplomatischer als so mancher Außenpolitiker. Über ein Interview der besonderen Art.",
//     "url": "https://www.handelsblatt.com/technik/forschung-innovation/kuenstliche-intelligenz-chatgpt-interview-im-heute-journal-die-welt-zu-einem-besseren-ort-machen-/29124956.html",
//     "urlToImage": "https://www.handelsblatt.com/images/ki-im-zdf-heute-journal/29124964/3-format2003.jpg",
//     "publishedAt": "2023-05-02T09:05:00+00:00",
//     "content": "KI im ZDF-heute-journalModerator Christian Sievers spricht im ZDF-heute-journal mit einer Künstlichen Intelligenz (KI) über Chancen und Risiken der KI-Nutzung.\r\n(Foto: dpa)\r\nMainz Mit dem Turing-Test… [+1377 chars]"
// }, {
//     "source": {
//         "id": "cbc-news",
//         "name": "CBC News"
//     },
//     "author": "CBC News",
//     "title": "ANALYSIS | Pope's 'secret' peace plan underscores NATO's lack of a political strategy on Ukraine | CBC News",
//     "description": "The Pope is getting involved in widespread efforts to bring Russia and Ukraine to the negotiating table. But while the experts agree the time has come for some back-channel diplomacy, any peace talks have to start",
//     "url": "http://www.cbc.ca/news/politics/nato-ukraine-russia-pope-francis-canada-1.6828666",
//     "urlToImage": "https://i.cbc.ca/1.6828837.1682982301!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/vatican-pope-ukraine.jpg",
//     "publishedAt": "2023-05-02T08:07:21.4284689Z",
//     "content": "As Ukraine prepares to unleash its long-anticipated counter-offensive, an important (some might say divine) voice is floating the notion of peace talks to end the war with Russia.\r\nThe Vatican reveal… [+8105 chars]"
// }, {
//     "source": {
//         "id": "cbs-news",
//         "name": "CBS News"
//     },
//     "author": "CBS News",
//     "title": "Man accused of killing 5 in Texas home still on the run",
//     "description": "The search for Francisco Oropesa, the man accused of killing five of his neighbors in Cleveland, Texas, stretched into a third day Monday. Multiple agencies, including the FBI, were participating in the search but authorities have said they do not know where …",
//     "url": "https://www.cbsnews.com/video/man-accused-of-killing-5-in-texas-home-still-on-the-run/",
//     "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2023/05/02/02ef7279-987e-4863-949a-70026316c087/thumbnail/1200x630/cd910e9a325b362f7baec8b5b0c40d7f/1682981962819-1931748-640x360.jpg",
//     "publishedAt": "2023-05-02T07:07:40+00:00",
//     "content": "Watch CBS News\r\nCopyright ©2023 CBS Interactive Inc. All rights reserved.\r\nGet browser notifications for breaking news, live events, and exclusive reporting.\r\nNot NowTurn On"
// }, {
//     "source": {
//         "id": "the-huffington-post",
//         "name": "The Huffington Post"
//     },
//     "author": "AP",
//     "title": "Bride Leaving Wedding Reception In Golf Cart Is Killed By Alleged Drunk Driver",
//     "description": "Jamie Lee Komoroski faces multiple charges over the death of newlywed Samantha Miller in Folly Beach, South Carolina.",
//     "url": "https://www.huffpost.com/entry/bride-killed-wedding-reception-south-carolina_n_6450a6b1e4b011a819c957ca",
//     "urlToImage": "https://img.huffingtonpost.com/asset/6450a6b224000031005f0e75.jpeg?cache=NG0miWeknG&ops=1200_630",
//     "publishedAt": "2023-05-02T06:07:53Z",
//     "content": "FOLLY BEACH, S.C. (AP) A bride leaving her wedding reception was killed when a woman driving under the influence and well over twice the speed limit slammed into the back of a golf cart on a South Ca… [+1678 chars]"
// }, {
//     "source": {
//         "id": "google-news-au",
//         "name": "Google News (Australia)"
//     },
//     "author": "Fraser Coast Chronicle",
//     "title": "Fourth woman in critical condition identified after horror triple fatality - Fraser Coast Chronicle",
//     "description": null,
//     "url": "https://news.google.com/rss/articles/CBMiqQFodHRwczovL3d3dy5jb3VyaWVybWFpbC5jb20uYXUvbmV3cy9xdWVlbnNsYW5kL2ZyYXNlci1jb2FzdC90ZWVuLWNyYXNoLXZpY3RpbS1pZGVudGlmaWVkLWluLW1hcnlib3JvdWdocy10cmlwbGUtZmF0YWwtdHJhZ2VkeS9uZXdzLXN0b3J5L2MxZjg2MzY1NWMxNzVkMWIzMjFiOGEwNDA3NTM3M2E00gGtAWh0dHBzOi8vd3d3LmNvdXJpZXJtYWlsLmNvbS5hdS9uZXdzL3F1ZWVuc2xhbmQvZnJhc2VyLWNvYXN0L3RlZW4tY3Jhc2gtdmljdGltLWlkZW50aWZpZWQtaW4tbWFyeWJvcm91Z2hzLXRyaXBsZS1mYXRhbC10cmFnZWR5L25ld3Mtc3RvcnkvYzFmODYzNjU1YzE3NWQxYjMyMWI4YTA0MDc1MzczYTQ_YW1w?oc=5",
//     "urlToImage": null,
//     "publishedAt": "2023-05-02T00:09:22+00:00",
//     "content": null
// }, {
//     "source": {
//         "id": "usa-today",
//         "name": "USA Today"
//     },
//     "author": null, 
//     "title": "'Multiple fatalities,' injuries after dust storm causes massive pile-up on Illinois' I-55",
//     "description": "Multiple fatalities expected, dozens hurt after dust storm causes pileup on Illinois' Interstate 55, closing traffic for 30 miles in both directions.",
//     "url": "https://www.usatoday.com/story/news/nation/2023/05/01/illinois-dust-storm-causes-massive-pileup-closes-traffic-for-30-miles/70172073007/",
//     "urlToImage": "https://www.gannett-cdn.com/presto/2023/05/01/NSJR/81f9e148-6b48-40d4-954b-10bb095dab34-I55_Crash.jpg?auto=webp&crop=1927,1084,x28,y0&format=pjpg&width=1200",
//     "publishedAt": "2023-05-01T20:58:35+00:00",
//     "content": "Multiple people are dead and dozens injured after a dust storm caused a multi-vehicle pileup late Monday morning south of Springfield, Illinois.\r\nTraffic on Interstate 55 was shut down in both direct… [+2060 chars]"
// }, {
//     "source": {
//         "id": "polygon",
//         "name": "Polygon"
//     },
//     "author": "Pete Volk",
//     "title": "The Diplomat Season 2: Netflix renews hit Keri Russell show",
//     "description": "The Diplomat is one of the best new shows on Netflix, starring Keri Russell and Rufus Sewell as American diplomats in the UK. It has been renewed for Season 2 after being a hit on Netflix this year.",
//     "url": "https://www.polygon.com/23706819/diplomat-netflix-season-2-news-cast-release-date-renewal-keri-russell",
//     "urlToImage": "https://cdn.vox-cdn.com/thumbor/dkv3ZJcI-Nn_FLkwJ9fjOLmdffE=/0x0:3600x1885/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24625262/DIPLOMAT_106_Unit_05126RC.jpg",
//     "publishedAt": "2023-05-01T17:45:00Z",
//     "content": "Between The Night Agent and The Diplomat, its been a good year for breezy, plot-heavy Netflix political-thriller series. The former was a massive hit for the streaming service and was quickly renewed… [+2008 chars]"
// }, {
//     "source": {
//         "id": "time",
//         "name": "Time"
//     },
//     "author": "Eric Cortellessa",
//     "title": "Senator Ben Cardin of Maryland to Announce Retirement, Multiple Sources Say",
//     "description": "Senator Ben Cardin, a Maryland Democrat, plans to announce his retirement in the coming days, TIME has learned, triggering a fight for the seat",
//     "url": "http://time.com/6275973/ben-cardin-senate-retirement-maryland/",
//     "urlToImage": "https://api.time.com/wp-content/uploads/2023/05/GettyImages-1466016559.jpg?quality=85&w=1024&h=628&crop=1",
//     "publishedAt": "2023-05-01T15:36:25Z",
//     "content": "Sen. Ben Cardin, a Maryland Democrat, plans to announce his retirement from the Senate in the coming days, multiple sources familiar with the matter tell TIME, setting up a potentially crowded and fi… [+4148 chars]"
// }, {
//     "source": {
//         "id": "msnbc",
//         "name": "MSNBC"
//     },
//     "author": null,
//     "title": "As Gorsuch joins Supreme Court scandal parade, Roberts gaslights on 'ethics principles'",
//     "description": "Alex Wagner shares new reporting from Politico on Supreme Court Justice Neil Gorsuch's involvement in an ethically dubious real estate deal, new Bloomberg reporting on Justice Clarence Thomas' ignored ethical conflicts, and Chief Justice John Roberts declinin…",
//     "url": "https://www.msnbc.com/alex-wagner-tonight/watch/as-gorsuch-joins-supreme-court-scandal-parade-roberts-gaslights-on-ethics-principles-171331141538",
//     "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/mpx/2704722219/2023_04/1682477967524_n_wagner_roberts_230425_1920x1080-gymw9x.jpg",
//     "publishedAt": "2023-04-26T02:59:43Z",
//     "content": null
// }, {
//     "source": {
//         "id": "the-globe-and-mail",
//         "name": "The Globe And Mail"
//     },
//     "author": "Molly Hayes",
//     "title": "OPP officers provide testimony at inquest into 2015 triple murders",
//     "description": "Four OPP officers addressed difficulties they had while discovering three deaths in 2015 connected by intimate partner violence",
//     "url": "https://www.theglobeandmail.com/canada/article-opp-provide-testimony-at-inquest-into-2015-triple-murders/",
//     "urlToImage": "https://www.theglobeandmail.com/resizer/B_0AHIFyolFcOl24Dt2Q82GJ_f4=/1200x800/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/tgam/BPRCBGA52VCDHGHL2GMDLH2QSA.JPG",
//     "publishedAt": "2022-06-16T01:18:17Z",
//     "content": "A real estate billboard of slain Anastasia Kuzyk along Highway 60 in Wilno, Ont., in 2015.Dave Chan/The Globe and Mail\r\nAs soon as she heard Anastasia Kuzyks address read out over her police radio on… [+4544 chars]"
// }, {
//     "source": {
//         "id": "the-hill",
//         "name": "The Hill"
//     },
//     "author": "Jordain Carney, Peter Sullivan",
//     "title": "Trump-era fight snags COVID deal",
//     "description": "Congress appears poised to punt a $10 billion deal on coronavirus relief until after a looming two-week break, as multiple stumbling blocks are complicating quick passage of the agreement.   A bipartisan group of senators announced this week that they had cli…",
//     "url": "https://thehill.com/news/3260056-trump-era-fight-snags-covid-deal/",
//     "urlToImage": "https://thehill.com/wp-content/uploads/sites/2/2022/04/thunejohn_040522arl2_lead.jpg?w=1280",
//     "publishedAt": "2022-04-06T10:00:00Z",
//     "content": "Congress appears poised to punt a $10 billion deal on coronavirus relief until after a looming two-week break, as multiple stumbling blocks are complicating quick passage of the agreement.  \r\nA bipar… [+5716 chars]"
// }, {
//     "source": {
//         "id": "nfl-news",
//         "name": "NFL News"
//     },
//     "author": null,
//     "title": "NFL injury updates, latest league news from Thursday, Jan. 20",
//     "description": "The Tampa Bay Buccaneers saw multiple offensive starters participate in practice Thursday, but are still waiting on their right tackle to get back on the field. Also, the latest NFL roster and injury news from Thursday.",
//     "url": "https://www.nfl.com/news/nfl-injury-updates-latest-league-news-from-thursday-jan-20",
//     "urlToImage": "https://static.www.nfl.com/image/private/t_editorial_landscape_12_desktop/league/nu2ombmssrq178clieou",
//     "publishedAt": "2022-01-20T19:22:41.693224Z",
//     "content": "The Tampa Bay Buccaneers saw multiple offensive starters participate in practice Thursday, but are still waiting on their right tackle to get back on the field.\r\nBuccaneers center Ryan Jensen and run… [+496 chars]"
// }, {
//     "source": {
//         "id": "the-hindu",
//         "name": "The Hindu"
//     },
//     "author": "The Hindu",
//     "title": "Limits of cooperation: On reforms in cooperative sector",
//     "description": "Reforms in cooperative sector should not be at the cost of federal principles",
//     "url": "https://www.thehindu.com/opinion/editorial/limits-of-cooperation-the-hindu-editorial-on-reforms-in-cooperative-sector/article35478339.ece",
//     "urlToImage": "https://www.thehindu.com/static/theme/default/base/img/og-image.jpg",
//     "publishedAt": "2021-07-22T18:32:00Z",
//     "content": "The cooperative movement certainly needs reform and revitalisation. Beset by political interference, many cooperative societies do not hold elections regularly, while some are superseded frequently. … [+2692 chars]"
// }, {
//     "source": {
//         "id": "the-times-of-india",
//         "name": "The Times of India"
//     },
//     "author": "Times Of India",
//     "title": "PBKS vs MI Live Score, IPL 2021: Mumbai Indians seek consistency; Punjab Kings eye return to winning ways",
//     "description": "IPL Live Score: Mumbai Indians seek consistency; Punjab Kings eye return to winning ways. Stay with TOI to get IPL live score, playing 11, scorecard, highlights and ball by ball score updates of the 17th IPL match between Punjab Kings and Mumbai Indians.",
//     "url": "http://timesofindia.indiatimes.com/sports/cricket/ipl/live-blog/punjab-kings-vs-mumbai-indians-pbks-vs-mi-live-score-ipl-2021-17th-match-chennai/liveblog/82214950.cms",
//     "urlToImage": "https://static.toiimg.com/thumb/msid-82214950,width-1070,height-580,imgsize-157009,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
//     "publishedAt": "2021-04-23T05:44:49Z",
//     "content": "Ravi Bishnoi return on the cards?\r\nDeepak Hooda showed what he is capable of, but greater consistency would be needed from him if the team has to prosper. They bet on Australian pace imports Jhye Ric… [+3131 chars]"
// }]

  constructor() {
    // console.log('cos')
    super();
    this.state = {
      // articles: this.articles,
      articles: [],
      loading: false,
      page: 1
    }
  }

  async componentDidMount(){
    let url = 'https://newsapi.org/v2/top-headlines?q=covid&from=2023-05-02&to=2023-05-02&sortBy=popularity&apiKey=56f164ae46b74c39914c176a020f49fb&page1&pageSize=9';
    // console.log('url')
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults
    });
  }

  handlePrevCLick = async ()=>{
    console.log('prev')
    let url = `https://newsapi.org/v2/top-headlines?q=covid&from=2023-05-02&to=2023-05-02&sortBy=popularity&apiKey=56f164ae46b74c39914c176a020f49fb&page=${this.state.page - 1}&pageSize=9`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
    })

  }
  
  handleNextCLick = async ()=>{
    console.log('next')

    if(this.state.page +1 > Math.ceil(this.state.totalResults/9)){
    }
    else{
      let url = `https://newsapi.org/v2/top-headlines?q=covid&from=2023-05-02&to=2023-05-02&sortBy=popularity&apiKey=56f164ae46b74c39914c176a020f49fb&page=${this.state.page + 1}&pageSize=9`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles
      })
      console.log('hnext')
    }
  }

  render() {
    // console.log('ren')  
    return (
        <div className="container my-3">
            <h2>News Spider - Top Headlines</h2>
            <div className="row">
                {this.state.articles.map((element) => {
                  return <div className="col-md-4 my-3" key={element.url}>
                    <NewsItem title={element.title} description={element.description? element.description : ''} imageUrl={element.urlToImage?element.urlToImage:'https://i.ytimg.com/vi/-mJFZp84TIY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB-xKz554go0O4Ypk0Zkr75ns1lfw'} newsUrl={element.url}></NewsItem>
                  </div>
                })}
            </div>
            <div className="d-flex justify-content-between">
              <button type="button" disabled={this.state.page<=1} className="btn btn-primary" onClick={this.handlePrevCLick}>&larr; Previous</button>
              <button type="button" className="btn btn-primary" onClick={this.handleNextCLick}>Next &rarr;</button>
            </div>
        </div>
    )
  }
}

export default News