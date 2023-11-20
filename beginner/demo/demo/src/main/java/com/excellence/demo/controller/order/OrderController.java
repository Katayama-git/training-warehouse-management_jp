package com.excellence.demo.controller.order;

import com.excellence.demo.controller.order.request.ExampleOrderRequest;
import com.excellence.demo.controller.order.response.OrdersResponse;
import com.excellence.demo.model.ExampleOrder;
import com.excellence.demo.model.ValidateResult;
import com.excellence.demo.service.OrderService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/orders")
public class OrderController {
    private final OrderService service;

    @GetMapping(produces = "application/json")
    @ResponseStatus(HttpStatus.OK)
    public OrdersResponse getAll() {
        List<ExampleOrder> orders = service.getAllOrder();
        OrdersResponse response = new OrdersResponse(orders);
        return response;
    }

    @PostMapping(produces = "application/json")
    @ResponseStatus(HttpStatus.CREATED)
    public void create(@RequestBody ExampleOrderRequest request) {
        ValidateResult validate = request.validate();
        if (!validate.ok()) {
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST, validate.errorMessage());
        }
        service.createOrder(request.toExampleOrder());
    }

    /*
     * In this lesson, we will add a new API to get order by id and how update the order.
     * the fundamental if the SAME as the create order API.
     * GET for get order by id
     * PUT for update order
     */

    @GetMapping(value = "/{orderId}", produces = "application/json")
    @ResponseStatus(HttpStatus.OK)
    public ExampleOrder get(@PathVariable int orderId) {
        return service.getOrderById(orderId);
    }

    @PutMapping(value = "/{orderId}", produces = "application/json")
    @ResponseStatus(HttpStatus.OK)
    public void update(@PathVariable int orderId,@RequestBody ExampleOrderRequest request) {
        ValidateResult validate = request.validate();
        if (!validate.ok()) {
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST, validate.errorMessage());
        }
        service.updateOrder(request.toExampleOrder(orderId));
    }


    public OrderController(OrderService service) {
        this.service = service;
    }
}