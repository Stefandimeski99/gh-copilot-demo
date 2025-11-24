using albums_api.Models;
using Microsoft.AspNetCore.Mvc;

/// <summary>
/// The AlbumController class provides API endpoints for managing albums.
/// </summary>
namespace albums_api.Controllers
{
    [Route("albums")]
    [ApiController]
    public class AlbumController : ControllerBase
    {
        /// <summary>
        /// Gets all albums.
        /// </summary>
        /// <returns>List of albums.</returns>
        [HttpGet]
        public IActionResult Get()
        {
            var albums = Album.GetAll();

            return Ok(albums);
        }

        /// <summary>
        /// Gets an album by its ID.
        /// </summary>
        /// <param name="id">Album ID.</param>
        /// <returns>Album details.</returns>
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return Ok();
        }

    }
}
