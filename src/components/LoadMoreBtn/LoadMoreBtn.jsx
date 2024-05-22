export default function LoadMoreBtn({ children, onClick, disabled }) {
  return (
    <LoadMoreBtn onClick={onClick} disabled={disabled}>
      {children}
    </LoadMoreBtn>
  );
}
