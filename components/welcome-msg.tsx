import { currentUser } from "@clerk/nextjs/server";

export const WelcomeMsg = async () => {
  const user = await currentUser();

  return (
    <div className="space-y-2 mb-4">
      <h2 className="text-white text-2xl lg:text-4xl font-medium capitalize">
        Welcome back{user?.firstName && `, ${user.firstName} 👋`}
      </h2>
      <p className="text-sm lg:text-base text-[#89b6fd]">
        This is your financial Overview report
      </p>
    </div>
  );
};
