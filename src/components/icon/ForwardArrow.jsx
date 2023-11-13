const ForwardArrow = ({ ...props }) => {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.5397 11.29L9.87974 5.64004C9.78677 5.54631 9.67617 5.47191 9.55431 5.42115C9.43246 5.37038 9.30175 5.34424 9.16974 5.34424C9.03773 5.34424 8.90702 5.37038 8.78516 5.42115C8.6633 5.47191 8.5527 5.54631 8.45974 5.64004C8.27349 5.8274 8.16895 6.08085 8.16895 6.34504C8.16895 6.60922 8.27349 6.86267 8.45974 7.05004L13.4097 12.05L8.45974 17C8.27349 17.1874 8.16895 17.4409 8.16895 17.705C8.16895 17.9692 8.27349 18.2227 8.45974 18.41C8.55235 18.5045 8.6628 18.5797 8.78467 18.6312C8.90655 18.6827 9.03743 18.7095 9.16974 18.71C9.30204 18.7095 9.43293 18.6827 9.5548 18.6312C9.67668 18.5797 9.78712 18.5045 9.87974 18.41L15.5397 12.76C15.6412 12.6664 15.7223 12.5527 15.7777 12.4262C15.8331 12.2997 15.8617 12.1631 15.8617 12.025C15.8617 11.8869 15.8331 11.7503 15.7777 11.6238C15.7223 11.4973 15.6412 11.3837 15.5397 11.29Z"
        fill="#303030"
      />
    </svg>
  );
};

export default ForwardArrow;