import { userRelated } from "../../../constant/user-related";

const PhotoProfile = () => {
  return (
    <>
      <img
        src={userRelated.imgUrl}
        alt={userRelated.name}
        className="rounded-[50%] w-[50px] aspect-[1/1] p-[2px] hover:p-0 border-2 hover:shadow-md m-2 md:ml-10"
      />
    </>
  );
};

export default PhotoProfile;
