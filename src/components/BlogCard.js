import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ title, description, link, image }) => (
  <div className="col-md-6 same-height">
    <div className="card flex-md-row mb-4 box-shadow h-md-250">
      <div className="card-body d-flex flex-column align-items-start">
        <h3 className="mb-0">
          <Link to={link} target="_blank" className="text-dark">
            {title}
          </Link>
        </h3>
        <p className="card-text mb-auto">{description}</p>
        <Link to={link} target="_blank">
          Lire Plus
        </Link>
      </div>
      <img
        className="card-img-right flex-auto d-none d-md-block"
        style={{ objectFit: 'cover' }}
        alt="Thumbnail"
        width={200}
        height={260}
        src={image}
      />
    </div>
  </div>
);

export default BlogCard;
