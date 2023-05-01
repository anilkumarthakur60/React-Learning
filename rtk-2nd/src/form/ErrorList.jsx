function ErrorList(props) {
  const { error } = props;

  return error ? (
    <div className="text-red-500">
      {error.map((err, index) => (
        <div key={index}> {err} </div>
      ))}
    </div>
  ) : null;
}

export default ErrorList;
