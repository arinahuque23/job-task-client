import { Link } from "react-router-dom";
import pic from "../../assets/imagestask1.jpeg"
import pic1 from "../../assets/downloadtask.jpeg"
import pic2 from "../../assets/download.jpeg"
import pic3 from "../../assets/images.jpeg"
import pic4 from "../../assets/imagestask1.jpeg"
import pic5 from "../../assets/imagestask2.jpeg"

const Benefits = () => {
  return (
    <div className="mt-5">
      <div className="mt-10">
        <h2 className="text-center text-4xl font-bold text-blue-700">
          Who Benefits Most?
        </h2>
        <h2 className="text-2xl text-center font-serif">
          {" "}
          Discover how our task management website can enhance productivity for
          different professionals.
        </h2>
      </div>
      <div className="mt-20">
        <div className="grid lg:grid-cols-3  md:ml-[30vh] md:grid-cols-1 mr-[40vh]   gap-[20vh] lg:mr-16  lg:mb-5 lg:ml-10 md:">
          <div className="card border card-compact lg:w-96 bg-base-100 w-[60vh] shadow-xl">
            <figure>
              <img
                src={pic}
                alt="Shoes"
              />
              <Link></Link>
            </figure>
            <div className="card-body">
              <h2 className="card-title ">Developers</h2>
              <p>Efficiently manage your coding tasks and project timelines.</p>
              
            </div>
          </div>
          <div className="card border w-[60vh] card-compact lg:w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src={pic1}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Web Designers</h2>
              <p>Keep track of design projects and collaborate seamlessly with your team</p>
              
            </div>
          </div>
          <div className="card border w-[60vh] card-compact lg:w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src={pic2}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Bankers</h2>
              <p>Organize your financial tasks, meetings, and deadlines in one place.</p>
              
            </div>
          </div>
          <div className="card w-[60vh] border card-compact lg:w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src={pic3}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Teachers</h2>
              <p>Streamline lesson planning, grading, and classroom organization.</p>
              
            </div>
          </div>
          <div className="card border card-compact w-[60vh] lg:w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src={pic4}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Students</h2>
              <p>Stay organized with your assignments, projects, and deadlines.</p>
              
            </div>
          </div>
          <div className="card border card-compact w-[60vh] lg:w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src={pic5}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Manager</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
