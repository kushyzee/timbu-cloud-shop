import { BounceLoader } from "react-spinners";

const Loader = ({loading}) => {
  return (
    <div className="flex h-[90svh] items-center justify-center">
        <BounceLoader
          speedMultiplier={2}
          color="#0abab5"
          loading={loading}
          size={120}
        />
      </div>
  )
}

export default Loader