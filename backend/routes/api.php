<?php

// ! ini tolong benerin ya. ini contoh aja

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/submit-questions', [AssessmentController::class, 'submitQuestions']);
Route::get('/recommendations/{userId}', [RecommendationController::class, 'getRecommendations']);
