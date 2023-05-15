import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getMovie} from "../redux/feature/movieSlice.js";
import Typography from "@mui/material/Typography";
import {Button} from "@mui/material";

export default function Movie() {

	//get url params
	const { id } = useParams();
	const  dispatch=useDispatch()
	const  {formData}=useSelector(state => state.movies)

	useEffect(() => {
		dispatch(getMovie(id));
	}, [dispatch,id]);

	const  navigate=useNavigate()


	return (
		<>
			<img src={formData.Poster} alt={formData.Title}/>
			<div className="">
				<Typography align={"left"} variant={"h3"} gutterBottom component={"h2"}>{formData.Title}</Typography>
				<Typography align={"left"} variant={"h5"} gutterBottom component={"h2"}>{formData.Year}</Typography>
				<Typography align={"left"} variant={"body1"} gutterBottom component={"h2"}>{formData.Plot}</Typography>
				<Typography align={"left"} variant={"h6"} gutterBottom component={"h2"}>{formData.Director}</Typography>
				<Button variant={"contained"} onClick={()=>navigate("/")} color={"primary"}>Go Back </Button>
			</div>
		</>
	)
}