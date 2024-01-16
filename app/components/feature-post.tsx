import DetailsCard from "./card/details-card";

const FeaturePost = () => {
  return (<div className="mb-4">
    <div className="feature-post-title w-50 d-flex flex-column justify-content-center align-items-center mx-auto p-4 mt-5">
      <h2 className="">Feature Post </h2>
      <small>
        <p className="mb-1 text-align-center" style={{ minWidth: '300px' }}>Problems trying to resolve the conflict between</p>
      </small>
    </div>
    <div className='container-md d-flex flex-row gap-4'> <DetailsCard /></div>

  </div>);
}

export default FeaturePost;