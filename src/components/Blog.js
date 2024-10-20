import BlogList from "./BlogList";
import CreateBlog from "./CreateBlog";
import InnerBanner from "./InnerBanner";
import { Link } from 'react-router-dom';

const BlogHome = () => {
  return ( 
    <>
     <InnerBanner />
    <section id="blog" className="container">
    <h2 className="heading mb-sm-5 mb-4 pt-3">Nos derniers nouveaux articles </h2>
    <div className='row mb-2'>
    <div class="col-md-6">
          <div className="card flex-md-row mb-4 box-shadow h-md-250">
            <div className="card-body d-flex flex-column align-items-start">
              <strong className="d-inline-block mb-2 text-primary">World</strong>
              <h3 className="mb-0">
                <Link to="#" className="text-dark" >Featured post</Link>
              </h3>
              <div className="mb-1 text-muted">Nov 12</div>
              <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
              <Link to="#">Continue reading</Link>
            </div>
            <img className="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" width={200} height={260} src="https://placehold.co/200x250/000000/FFFFFF.png" data-holder-rendered="true" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="card flex-md-row mb-4 box-shadow h-md-250">
            <div className="card-body d-flex flex-column align-items-start">
              <strong className="d-inline-block mb-2 text-success">Design</strong>
              <h3 class="mb-0">
                <Link className="text-dark" to="#">Post title</Link>
              </h3>
              <div className="mb-1 text-muted">Nov 11</div>
              <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
              <Link to="#">Continue reading</Link>
            </div>
            <img class="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" width={200} height={260} src="https://placehold.co/200x250/000000/FFFFFF.png" />
          </div>
        </div>
        </div>

          <div className="row">
        <div className="col-md-8 blog-main">
          <h3 className="pb-3 mb-4 font-italic border-bottom">
            From the Firehose
          </h3>

          <div className="blog-post">
            <h2 className="blog-post-title">Sample blog post</h2>
            <p className="blog-post-meta">January 1, 2014 by <Link to="#">Mark</Link></p>

            <p>This blog post shows a few different types of content that's supported and styled with Bootstrap. Basic typography, images, and code are all supported.</p>
            <hr/>
            <p>Cum sociis natoque penatibus et magnis <Link to="#">dis parturient montes</Link>, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>
            <blockquote>
              <p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
            </blockquote>
            <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
            <h2>Heading</h2>
            <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <h3>Sub-heading</h3>
            <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
            <pre><code>Example code block</code></pre>
            <p>Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.</p>
            <h3>Sub-heading</h3>
            <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
            <ul>
              <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
              <li>Donec id elit non mi porta gravida at eget metus.</li>
              <li>Nulla vitae elit libero, a pharetra augue.</li>
            </ul>
            <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>
            <ol>
              <li>Vestibulum id ligula porta felis euismod semper.</li>
              <li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>
              <li>Maecenas sed diam eget risus varius blandit sit amet non magna.</li>
            </ol>
            <p>Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.</p>
          </div>

          <div className="blog-post">
            <h2 className="blog-post-title">Another blog post</h2>
            <p className="blog-post-meta">December 23, 2013 by <Link to="#">Jacob</Link></p>

            <p>Cum sociis natoque penatibus et magnis <Link to="#">dis parturient montes</Link>, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>
            <blockquote>
              <p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
            </blockquote>
            <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
            <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          </div>

          <div className="blog-post">
            <h2 className="blog-post-title">New feature</h2>
            <p className="blog-post-meta">December 14, 2013 by <Link to="#">Chris</Link></p>

            <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
            <ul>
              <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
              <li>Donec id elit non mi porta gravida at eget metus.</li>
              <li>Nulla vitae elit libero, a pharetra augue.</li>
            </ul>
            <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
            <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>
          </div>

          <nav className="blog-pagination">
            <Link className="btn btn-outline-primary" to="#">Older</Link>
            <Link className="btn btn-outline-secondary disabled" to="#">Newer</Link>
          </nav>
        </div>

        <aside class="col-md-4 blog-sidebar">
          <div class="p-3 mb-3 bg-light rounded">
            <h4 class="font-italic">About</h4>
            <p class="mb-0">Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
          </div>

          <div class="p-3">
            <h4 class="font-italic">Archives</h4>
            <ol class="list-unstyled mb-0">
              <li><Link to="#">March 2014</Link></li>
              <li><Link to="#">February 2014</Link></li>
              <li><Link to="#">January 2014</Link></li>
              <li><Link to="#">December 2013</Link></li>
              <li><Link to="#">November 2013</Link></li>
              <li><Link to="#">October 2013</Link></li>
              <li><Link to="#">September 2013</Link></li>
              <li><Link to="#">August 2013</Link></li>
              <li><Link to="#">July 2013</Link></li>
              <li><Link to="#">June 2013</Link></li>
              <li><Link to="#">May 2013</Link></li>
              <li><Link to="#">April 2013</Link></li>
            </ol>
          </div>

          <div class="p-3">
            <h4 class="font-italic">Elsewhere</h4>
            <ol class="list-unstyled">
              <li><Link to="#">GitHub</Link></li>
              <li><Link to="#">Twitter</Link></li>
              <li><Link to="#">Facebook</Link></li>
            </ol>
          </div>
        </aside>
        </div>
   {/*  <CreateBlog />
    <BlogList /> */}
    </section>
    </>
   );
}
 
export default BlogHome;