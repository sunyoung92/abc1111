import React from 'react';
const siteText = [
    {
        text: ["Make", "site compliant with", "1차포트폴리오"],
        title: ["웹표준을 이용한 사이트 제작"],
        info: ["site coding1", "production period : two days1", "use stack : html5/css3, CSS Variable1, React1"],

    },
    {
        text: ["Make", "site compliant with", "팀프로젝트"],
        title: ["웹접근성 이용한 사이트 제작"],
        info: ["site coding2", "production period : two days2", "use stack : html5/css3, CSS Variable2, React2"],
    },
    {
        text: ["Make", "site compliant with", "2차 포프롤리오"],
        title: ["온 정성을 이용한 사이트 제작"],
        info: ["site coding3", "production period : two days3", "use stack : html5/css3, CSS Variable, React3"],
    },
    {
        text: ["Make", "site compliant with", "내생애 최고 작품"],
        title: ["리액트를 이용한 사이트 제작"],
        info: ["site coding4", "production period : two days4", "use stack : html5/css3, CSS Variable, React4"],
    },

]

const Site = () => {
    return (
        <section id="site">
            <div className="site_inner">
                <h2 className="site_title">
                    Site coding<em>나의 작업물</em>
                </h2>
                <div className="site_wrap">
                    {siteText.map((site, key) => (
                        <article className={`site_item s${key + 1}`} key={key} >
                            <span className="num">{key + 1}.</span>
                            <div className="text">
                                <div>{site.text[0]}</div>
                                <div>{site.text[1]}</div>
                                <div>{site.text[2]}</div>

                            </div>
                            <h3 className="title">{site.title}</h3>
                            <div className="btn">
                                <a href="/">code</a>
                                <a href="/">view</a>
                            </div>
                            <div className="info">
                                <span>{site.info[0]}</span>
                                <span>{site.info[1]}</span>
                                <span>{site.info[2]}</span>

                            </div>
                        </article>
                    ))}

                    {/* <article className="site_item s2">
                        <span className="num">2.</span>
                        <div className="text">
                            <div></div>
                            <div></div>
                            <div>react.js</div>
                        </div>
                        <h3 className="title">리액트를 이용한 사이트 제작</h3>
                        <div className="btn">
                            <a href="https://github.com/webstoryboy/port2023-react">code</a>
                            <a href="https://port2023-react.netlify.app/">view</a>
                        </div>
                        <div className="info">
                            <span>site coding</span>
                            <span>production period : two days</span>
                            <span>use stack : HTML5/CSS3, CSS Variable, Vite</span>
                        </div>
                    </article>
                    <article className="site_item s3">
                        <span className="num">3.</span>
                        <div className="text">
                            <div>Make</div>
                            <div>site compliant with</div>
                            <div>vue.js</div>
                        </div>
                        <h3 className="title">뷰를 이용한 사이트 제작</h3>
                        <div className="btn">
                            <a href="https://github.com/webstoryboy/port2023-vue">code</a>
                            <a href="https://port2023-vue.netlify.app/">view</a>
                        </div>
                        <div className="info">
                            <span>site coding</span>
                            <span>production period : two days</span>
                            <span>use stack : vue.js, CSS Variable, vite</span>
                        </div>
                    </article>
                    <article className="site_item s4">
                        <span className="num">4.</span>
                        <div className="text">
                            <div>Make</div>
                            <div>site compliant with</div>
                            <div>next.js</div>
                        </div>
                        <h3>넥스트를 이용한 사이트 제작</h3>
                        <div className="btn">
                            <a href="https://github.com/webstoryboy/port2023-next">code</a>
                            <a href="https://port2023-next.netlify.app/">view</a>
                        </div>
                        <div className="info">
                            <span>site coding</span>
                            <span>production period : two days</span>
                            <span>use stack : next.js, CSS Variable, Vite</span>
                        </div>
                    </article> */}
                </div>
            </div>
        </section>
    )
}

export default Site
