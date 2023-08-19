<section className="container" style={{backgroundColor: '#F5F6F8'}}>
						<div className="px-md-5 px-3 d-flex flex-column gap-3">
							<div className="d-flex align-items-center justify-content-between">
								<div className="flex flex-col gap-y-3">
									<p className="font-bold text-2xl text-tickitz-primary">Now Showing</p>
									<div className="divider h-[3px] my-0 bg-tickitz-primary self-center w-1/2"></div>
								</div>
								<div>
									<Link href={"/movies"} className="font-bold text-tickitz-primary">
										view all
									</Link>
								</div>
							</div>
							<div className="relative">
								<div className="carousel pb-38 gap-x-5">
									{/* {nowMovies &&
										nowMovies.length > 0 &&
										nowMovies.map((movie) => {
											return (
												<div
													key={movie.id}
													className="group carousel-item w-[202.2px] cursor-pointer"
												>
													<div className="flex flex-col gap-y-7 bg-white/20 group-hover:bg-white group-hover:absolute group-hover:w-[202.2px] group-hover:shadow-[0px_8px_30px_rgba(61,64,91,0.3)] border-2 border-white rounded-md p-5">
														<figure className="relative overflow-hidden w-[159px] h-[224px]">
															<Image
																alt="movie-poster"
																src={movie.movies_image}
																fill={true}
																priority={true}
																sizes="159px"
																className="rounded-md"
															/>
														</figure>
														<div className="group-hover:flex flex-col gap-y-3 hidden">
															<p className="font-bold text-lg text-tickitz-darkTitle text-center">
																{movie.title}
															</p>
															<p className="text-xs text-[#A0A3BD] text-center">{movie.category}</p>
														</div>
														<div className="group-hover:flex flex-col gap-y-5 hidden">
															<button
																onClick={() => router.push(`movies/${movie.id}`)}
																className="btn normal-case text-tickitz-primary border-tickitz-primary bg-white hover:text-white hover:bg-tickitz-primary"
															>
																Details
															</button>
															<button
																onClick={() => router.push(`movies/${movie.id}`)}
																className="btn normal-case text-white border-tickitz-primary bg-tickitz-primary hover:text-tickitz-primary"
															>
																Book Now
															</button>
														</div>
													</div>
												</div>
											);
										})} */}
								</div>
							</div>
						</div>
					</section>