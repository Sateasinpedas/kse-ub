import ActorCard from "../Components/BehindTheScene/ActorCard";
import UserLayout from "../Layout/User";

export default function BehindTheScene() {
  return (
    <UserLayout>
      <div className="min-h-screen py-40 w-full">
        <div className="lg:ml-40">
          <h1 className="text-4xl mb-5 font-bold">Behind The Scene</h1>
          <p className="text-xl mb-10">Yuk intip siapa yang di belakang layar dari website ini.</p>
        </div>
        <div className="mx-auto w-full">
          <ActorCard name={'Rafli Ardiansyah'} role={'Project Manager & Developer'} prodi={"Teknologi Informasi '21"}/>
          <ActorCard name={'Redomeire'} role={'Developer'} prodi={"Teknologi Informasi '21"}/>
        </div>
      </div>
    </UserLayout>
  );
}
