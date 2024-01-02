/* eslint-disable react/prop-types */
export function Post(props) {
  return (
    <div>
      <strong>{props.author}</strong>
      <p className="post">{props.content}</p>
    </div>
  )
}
