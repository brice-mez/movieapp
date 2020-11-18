import React from 'react';
import axios from 'axios';

class PostMovie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           title: '',
           poster: '',
           comment: ''
        }
        this.onChange = this.onChange.bind(this);
        this.submitMovie = this.submitMovie.bind(this);
    }

    onChange(movie) {
        this.setState({
            [movie.target.name]: movie.target.value,
        });
    }

    submitMovie(movie) {
        const url = 'https://post-a-form.herokuapp.com/api/movies/';
        movie.preventDefault();
        axios.post(url, this.state)
        .then(res => res.data)
        .then(res => {
            alert(`Movie add with ID ${res.id}`);
        })
        .catch(movie => {
            console.error(movie);
            alert('Error adding movie')
        })
    }


    render() {
        
        return(
            <div className='PostMovie'>
                <h1>Add movie</h1>

                <form onSubmit={this.submitMovie}>
                    <fieldset>
                        <legend>Info</legend>
                        <div>
                            <label htmlFor='title'>title</label>
                            <input
                                type='text'
                                id='title'
                                name='title'
                                onChange={this.onChange}
                                value={this.state.title}
                            />
                        </div>

                        <div>
                            <label htmlFor='poster'>URL</label>
                            <input
                                type= 'url'
                                id= 'poster'
                                name= 'poster'
                                onChange={this.onChange}
                                value={this.state.poster}
                            />
                        </div>
                        <div>
                            <label htmlFor="comment">comment</label>
                            <textarea 
                                id= 'comment'
                                name= 'comment'
                                onChange={this.onChange}
                                value={this.state.comment}>
                            
                            </textarea>
                        </div>
                        <div>
                            <input type='submit' value='Add'/>
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default PostMovie;