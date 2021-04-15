import React from 'react';
import _ from 'lodash';

import {Layout} from '../components/index';
import {htmlToReact, withPrefix, markdownify} from '../utils';
import BlogPostFooter from '../components/BlogPostFooter';

export default class Post extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
            <div className="outer">
              <div className="inner-medium">
                <article className="post post-full">
                  <header className="post-header">
                    <h1 className="post-title">{_.get(this.props, 'page.frontmatter.title', null)}</h1>
                    {_.get(this.props, 'page.frontmatter.subtitle', null) && (
                    <div className="post-subtitle">
                      {htmlToReact(_.get(this.props, 'page.frontmatter.subtitle', null))}
                    </div>
                    )}
                  </header>
                  {_.get(this.props, 'page.frontmatter.image', null) && (
                  <div className="post-image">
                    <img src={withPrefix(_.get(this.props, 'page.frontmatter.image', null))} alt={_.get(this.props, 'page.frontmatter.image_alt', null)} />
                  </div>
                  )}
                  <div className="post-content">
                      <script src="//my.visme.co/visme-embed.js"></script><div class="visme_d" data-url="q6xj640r-untitled-project" data-w="2560" data-h="1440" data-domain="my"></div><p style="width:142px !important;border-radius:3px !important;padding:3px !important;font-size:12px !important;font-family:Arial, sans-serif !important;color:#314152 !important;white-space:nowrap !important">Made with <a href="https://www.visme.co/?vc=Made-With-Visme&amp;utm_medium=Embed" target="_blank" rel="noreferrer" style="font-weight:600 !important;text-decoration:none !important;font-size:12px !important;font-family:Arial, sans-serif !important;color:#314152 !important;white-space:nowrap !important">Visme</a></p>
                    {markdownify(_.get(this.props, 'page.markdown', null))}
                  </div>
                  <BlogPostFooter {...this.props} page={this.props.page} date_type={'long'} />
                </article>
              </div>
            </div>
            </Layout>
        );
    }
}
