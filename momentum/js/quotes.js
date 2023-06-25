const quotes = [
    {
        quote: "난 바스켓맨이니까...!!",
        author: "강백호",
    },
    {
        quote: "포기하면 그 순간이 바로 시합 종료에요",
        author: "감독님"
    },
    {
        quote: "영감님의 영광의 시대는 언제였죠...? 난 지금입니다!!",
        author: "강백호",
    },
    {
        quote: "난 누구냐! 니가 말해봐, 내 이름을 말해봐. 난 누구냐! 그래. 난 정대만. 포기를 모르는 남자지.",
        author: "정대만",
    },
    {
        quote: "이젠 내겐 링밖에 보이지 않아!!",
        author: "정대만",
    },
    {
        quote: "이번엔 거짓이 아니라구요.",
        author: "강백호",
    },
    {
        quote: "안선생님..!! 농구가 하고 싶어요...",
        author: "정대만",
    },
    {
        quote: "왼손은 거들 뿐...",
        author: "강백호",
    },
    {
        quote: "이 소리가 고요하다. 날 되살아나게 한다, 몇 번이라도.",
        author: "정대만",
    },
    {
        quote: "하지만 북산은 지지 않는다",
        author: "채치수",
    }
]
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;