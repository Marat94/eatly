import React from "react";
import Wrapper from "../wrapper/Wrapper";
import { articles, articlesInfo } from "./blogData";
import './blog.css';

const Blog = () => {
  return (
    <Wrapper>
      <section className="blog">
        <div className="blog-headline">
          <h1 className="blog-title">How To Order Food On eatly?</h1>
          <div className="blog-pic">
            <img src="/image/blog/blogPicture.svg" alt="picture" />
          </div>
        </div>

        <div className="blog-body">
          <div className="blog-text">
            {articlesInfo.map((item, i) => (
              <div className="blog-context" key={i}>
                <h1>{item.title}</h1>
                <p>{item.text}</p>
                <div className="menu-info">{item.list}</div>
              </div>
            ))}
            <div className="next-article">
              <button className="article-button">
                Next Article
                <img src="/image/blog/buttonArrow.svg" alt="arrow" />
              </button>
            </div>
          </div>
          <div className="blog-articles">
            <h1 className="top-articles-title">Top Articles</h1>
            {articles.map((item, index) => (
              <div className="top-articles" key={index}>
                <img src={item.articleCover} alt="cover" className="article-cover" />
                <div className="top-articles-item">
                  <h1>{item.title}</h1>
                  <div className="article-review">
                    <div className="review-info">
                      <img src={item.image} alt="image" />
                      <div>
                        <p className="review-text">{item.text}</p>
                        <p className="review-name">{item.name}</p>
                      </div>
                    </div>
                    <p className="review-date">{item.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


      </section>
    </Wrapper>
  );
};

export default Blog;
